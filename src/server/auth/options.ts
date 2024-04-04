import { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';
import { connectToDB } from '../db';
import { UserSchemaType } from '../db/models/User/type';
import UserModel from '../db/models/User';
import { calcSize, freeStorageSize } from '@/lib/storage';


const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

            async profile(profile, tokens) {

                try {

                    const { email,...googleUser }: GoogleProfile = profile

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
                            firstName:googleUser.given_name,
                            lastName:googleUser.family_name,
                            username:googleUser.name,
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

                    const user =  await newUser.save();

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
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,

            async profile(profile, tokens) {
                return { ...profile }
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

