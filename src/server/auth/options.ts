import { AuthOptions } from 'next-auth'
import GithubProvider from  'next-auth/providers/github';
import GoogleProvider from  'next-auth/providers/google';


const authOptions : AuthOptions = {
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
            
           async profile(profile,tokens){
                return {...profile,id:profile.sub}
            }
        }),
        GithubProvider({
            clientId:process.env.GITHUB_CLIENT_ID as string,
            clientSecret:process.env.GITHUB_CLIENT_SECRET as string,
            
            async profile(profile,tokens){
                return {...profile}
            }
        })
    ],

    pages:{
        signIn:'/signin'
    },
    session:{
        strategy:"jwt",
    },
    secret:process.env.AUTH_SECRET as string
};


export default authOptions;

