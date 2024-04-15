import { RegisterBodyType } from "@/lib/type";
import { connectToDB } from "@/server/db";
import UserModel from "@/server/db/models/User";
import { UserSchemaType } from "@/server/db/models/User/type";
import { NextRequest } from "next/server"

// zod will be used here




export async function POST(req:NextRequest) {
    const body : Partial<RegisterBodyType> = await req.json()
    if(!body?.email||!body.password||!body.firstName||!body.lastName||!body.username){
        return new Response('body data is not valid',{
            status:400
        })
    };
    try{
        const { email,firstName,lastName,password,username } = body; 
        // connect to the db
        await connectToDB(); 

        // verifying if the user exists
        // @ts-ignore
        const existedUser = await UserModel.DoesUserExists(email);

        if(existedUser){
            return new Response(`User with this email(${email}) already exists`,{status:409});
        }

        // create the user 
        const NewUserData : UserSchemaType = {
            account:{
                auth:{
                    oauth:false,
                    password,
                    provider:'email'
                },
                email,
                firstName,
                lastName,
                username,
                pic:'no-pic'
            },
            storage:{
                projects:[]
            },
        } 

        const newUser = new UserModel(NewUserData);

        // save the user 

        await newUser.save();  
        
        return Response.json({
            message:'User create',
            user:{
                email,
                username
            }
        })
    }catch(err){
        console.log(err)
        return new Response('Server Error',{status:500})
    }
  }