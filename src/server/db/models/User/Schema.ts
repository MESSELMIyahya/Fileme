import { Schema } from "mongoose";
import { UserSchemaType,FileType,FolderType } from "./type";




// File Schema

const FileSchema = new Schema<FileType>({
    deleted:{
        type:Boolean,
        required:false,
        default:false
    },
    uploaded:{
        type:Boolean,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    owner:Schema.ObjectId,
    size:{
        type:Number,
        required:true,
    }
})



// Folder Schema 

const FolderSchema = new Schema<FolderType>({
    color:{
        default:'blue',
        type:String,
        required:false,
        enum:['blue','red']
    },
    createdIn:{
        type:Date,
        required:true,
    },
    deleted:{
        type:Boolean,
        default:false,
        require:false,
    },
    folders:[this],
    files:[FileSchema],
    name:{
        type:String,
        required:true,
    },
    size:{
        type:Number,
        required:true,
    }
})



// User Schema 

const UserSchema = new Schema<UserSchemaType>({
    account:{
        OAuth:{
            type:String,
            enum:['github','google','email'],
            required:true,
        },
        email:{
            type:String,
            trim:true,
            unique:true,
            lowercase:true,
            required:true,
        },
        pic:{
            type:String,
            required:true,
        },
        createDate:{
            type:Date,
            required:true
        },
        username:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
        firstName:{
            type:String,
            required:true,
        },
        password:{
            withPassword:{
                type:Boolean,
                required:true,
            },
            code:{
                type:String,
                required:true,
            }
        },
        payment:{
            type:String,
            required:false,
        },
        plan:{
            type:{
                type:String,
                enum:['free','pro','team','enterprise'],
                default:'free'
            },
            monthly:{
                type:Boolean,
                default:false
            },
            startDate:{
                type:Date,
                required:false
            },
            endDate:{
                type:Date,
                required:false
            },
            payments:[{type:String}]
        }
    },
    storage:{
        space:{
            required:true,
            type:String,
        },
        freeSpace:{
            required:true,
            type:String,
        },
        all:{
            filesIDs:[Schema.ObjectId],
            foldersIDs:[Schema.ObjectId],
        },
        rootDir:{
            folders:FolderSchema,
            files:[FileSchema]
        }
    }
});


export default UserSchema;