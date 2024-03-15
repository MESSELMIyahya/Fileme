



// user ID type 

import { Model } from "mongoose";

type UserID = string;

// Plans Type
type Plans = 'free' | 'pro' | 'team' | 'enterprise'

// Storage Type
// 1GB for free , 10GB for pro , 100GB for team , Custom for Enterprise
type SpaceStorageType = number
type SizeType = number;

// Plan Type
export interface PlanType {
    type: Plans
    monthly: boolean;
    // scalable: boolean;
    payments:string[];
    startDate?:Date;
    endDate?:Date;
}


// File Type 
type FileId = string;
export interface FileType {
    url:string // => firebase storage link of the file
    uploaded:boolean;
    owner:UserID;
    deleted:boolean;
    name:string;
    size:SizeType
}

// folder type 

type FolderColorType = 'blue' | 'red' ;
type FolderId = string;
export interface FolderType {
    name:string;
    createdIn:Date;
    color:FolderColorType;// => by default is blue
    deleted:boolean;
    size:SizeType; // => the sum of all the  files and folders inside it
    folders:FolderType[];
    files:FileType[]
}


export interface UserSchemaType {
    account: {
        OAuth: 'google' | 'github' | 'email' ;
        email: string;
        pic: string;
        password:{
            withPassword:boolean;
            code:string|null;
        }
        createDate:Date;
        username:string;
        lastEditDate:number;
        firstName: string;
        lastName: string;
        payment: string | null;
        plan: PlanType;
    }

    storage:{
        space:SpaceStorageType;
        freeSpace:SpaceStorageType;
        all:{
           filesIDs:FileId[];
           foldersIDs:FolderId[];
        }
        rootDir:{
            folders:FolderType[];
            files:FileType[];
        }
    }

}


export type UserModelType =  Model<UserSchemaType>;