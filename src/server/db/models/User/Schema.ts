import { Schema  } from "mongoose";
import { UserSchemaType,FileType,FolderType } from "./type";




// File Schema

const FileSchema = new Schema<FileType>({
    deleted:{
        type:Boolean,
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
    },
    files:[{type:FileSchema}],
    name:{
        type:String,
        required:true,
    },
    size:{
        type:Number,
        required:true,
    }
});

// add folders to it self
FolderSchema.add({folders:[{type:FolderSchema}]})

// User Schema 

const UserSchema = new Schema<UserSchemaType>({
    account:{
        auth:{
            password:{
                required:false,
                type:String,
            },
            oauth:{
                required:true,
                type:Boolean
            },
            provider:{
                type:String,
                enum:['github','google','email'],
                required:true,
            },
        },
        email:{
            type:String,
            trim:true,
            unique:true,
            match: [/^\S+@\S+\.\S+$/, "Email isn't valid"],
            lowercase:true,
            required:true,
        },
        pic:{
            type:String,
            required:true,
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
        // payment:{
        //     type:String,
        //     required:false,
        // },
        // plan:{
        //     type:{
        //         type:String,
        //         enum:['free','pro','team','enterprise'],
        //         default:'free'
        //     },
        //     monthly:{
        //         type:Boolean,
        //         default:false
        //     },
        //     startDate:{
        //         type:Date,
        //         required:false
        //     },
        //     endDate:{
        //         type:Date,
        //         required:false
        //     },
        //     payments:[{type:String}]
        // }
    },
    storage:{
        space:{
            required:true,
            type:Number,
        },
        freeSpace:{
            required:true,
            type:Number,
        },
        all:{
            filesIDs:[Schema.ObjectId],
            foldersIDs:[Schema.ObjectId],
        },
        rootDir:{
            folders:[{
                type:FolderSchema
            }],
            files:[{
                type:FileSchema
            }]
        }
    }
},{
    timestamps:true
});


export default UserSchema;