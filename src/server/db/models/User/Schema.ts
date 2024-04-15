import { Schema } from "mongoose";
import { UserSchemaType, ProjectType } from "./type";
import { storageProviders } from "@/server/storage/config";


// Projects schema 
const projectSchema = new Schema<ProjectType>({
    mainInfo: {
        name: {
            required: true,
            type: String,
            trim: true,
        },
        description: {
            required: true,
            type: String,
            trim: true,
        },
        deleted: {
            required: true,
            type: Boolean
        },
        createdIn: {
            required: true,
            type: Date
        }
    },
    storage: {
        provider: {
            config: {
                type:Schema.Types.Mixed,
            },  
            service: {
                type: String,
                enum: storageProviders,
                required:true,
            },
        },
        bucketsNumber:{
            type:Number,
            required:true,
            default:0
        },
        buckets:[
            {
                id:{
                    required:true,
                    type:String,
                },
                name: {
                    required: true,
                    type: String,
                    trim: true,
                },
                path: {
                    required: false,
                    type: String,
                },

            }
        ]
    }
}, {
    _id: true
})


// User Schema 

const UserSchema = new Schema<UserSchemaType>({
    account: {
        auth: {
            password: {
                required: false,
                type: String,
            },
            oauth: {
                required: true,
                type: Boolean
            },
            provider: {
                type: String,
                enum: ['github', 'google', 'email'],
                required: true,
            },
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            match: [/^\S+@\S+\.\S+$/, "Email isn't valid"],
            lowercase: true,
            required: true,
        },
        pic: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
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
    storage: {
        projects: [projectSchema]
    }
}, {
    timestamps: true
});


export default UserSchema;