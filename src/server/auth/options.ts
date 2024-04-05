import { AuthOptions } from 'next-auth'
// import GithubProvider, { GithubProfile } from 'next-auth/providers/github';
import CredentialsProvider, { CredentialInput } from 'next-auth/providers/credentials'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';
import { connectToDB } from '../db';
import { UserSchemaType } from '../db/models/User/type';
import UserModel from '../db/models/User';
import { calcSize, freeStorageSize } from '@/lib/storage';


const authOptions: AuthOptions = {
    providers: [
        // google
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

            //@ts-ignore
            async profile(profile, tokens) {

                try {

                    const { email, ...googleUser }: GoogleProfile = profile

                    // connect to the db

                    await connectToDB();

                    // verifying if the user exists
                    // @ts-ignore
                    const existedUser: boolean = await UserModel.DoesUserExists(email);

                    // if user exists
                    if (existedUser) {

                        // fetch the user 

                        const user = await UserModel.findOne({ 'account.email': email });

                        // return the user 
                        return {
                            id: user?._id,
                            email: user?.account.email,
                            image: user?.account.pic,
                            name: user?.account.username
                        }
                    }

                    // if user doesn't exist

                    // create the user 
                    const NewUserData: UserSchemaType = {
                        account: {
                            auth: {
                                oauth: true,
                                provider: 'google'
                            },
                            email,
                            firstName: googleUser.given_name,
                            lastName: googleUser.family_name,
                            username: googleUser.name,
                            pic: googleUser.picture,
                        },
                        storage: {
                            all: {
                                filesIDs: [],
                                foldersIDs: []
                            },
                            freeSpace: calcSize(freeStorageSize, 'MB'),
                            space: calcSize(freeStorageSize, 'MB'),
                            rootDir: {
                                files: [],
                                folders: []
                            }
                        },
                    }

                    const newUser = new UserModel(NewUserData);

                    // save the user 

                    const user = await newUser.save();

                    // return the user 
                    return {
                        id: user?._id,
                        email: user?.account.email,
                        image: user?.account.pic,
                        name: user?.account.username
                    }
                } catch (err) {
                    return null;
                }
            }
        }),


        // credentials 
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(c) {
                try {

                    const { email, password } : { email: string, password: string } = c as never;

                    // connect to the db

                    await connectToDB();

                    // verifying if the user exists
                    // @ts-ignore
                    const existedUser: boolean = await UserModel.DoesUserExists(email);

                    // if user doesn't exists
                    if (!existedUser) {
                        return null;
                    }

                    // fetch the user 
                    const user = await UserModel.findOne({ 'account.email': email });

                     // if user doesn't exists
                    if (!user) {
                        return null;
                    }

                    // compare passwords 
                    // @ts-ignore
                    const isValidPass : boolean = await user.ComparePasswords(password); 

                    // if the passwords aren't match
                    if(!isValidPass){
                        return  null;
                    }

                    // return the user 
                    return {
                        id: user?._id,
                        email: user?.account.email,
                        image: user?.account.pic,
                        name: user?.account.username
                    } as never
                } catch (err) {
                    return null;
                }
            }

        })

    ],

    pages: {
        signIn: '/signin'
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.AUTH_SECRET as string
};


export default authOptions;

