// user ID type 

import { firebaseConfigType } from "@/types/firebase";
import { Model } from "mongoose";

type UserID = string;


// Storage Provider type ;

type StorageProviderType = 'firebase' | 'supabase' | '' ;

// Project Type 

export interface ProjectType {
    mainInfo:{
        name:string;
        description:string;
        deleted:boolean;
        createdIn:Date;
    }
    storage:{
        provider:{
            config:firebaseConfigType;
            service:StorageProviderType // => BAAS like Firebase or Supabase
        }
        bucketsNumber:number;
        buckets:{
            id:string;
            name:string
            path?:string // => for firebase bucket
        }[]
    }   
    
}



// Plans Type
type Plans = 'free' | 'pro' | 'team' | 'enterprise'


// Plan Type
export interface PlanType {
    type: Plans
    monthly: boolean;
    // scalable: boolean;
    payments:string[];
    startDate?:Date;
    endDate?:Date;
}


export interface UserSchemaType {
    account: {
        email: string;
        auth:{
            provider: 'google' | 'github' | 'email' ;
            password?:string;
            oauth:boolean
        }
        pic: string;
        username:string;
        // lastEditDate:number;
        firstName: string;
        lastName: string;
        // payment: string | null;
        // plan: PlanType;
    }

    storage:{
        projects:ProjectType[];
    }

}


export type UserModelType =  Model<UserSchemaType>;