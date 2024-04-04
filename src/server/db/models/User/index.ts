import { model, models } from 'mongoose'
import { UserModelType } from './type'
import bt from 'bcrypt'
import UserSchema from './Schema';

// Middleware


// hashing the password before saving the user 

UserSchema.pre('save',async function (){
    try{
        if(this.account.auth.provider === 'email' && this.account.auth.password){
            const pass = await bt.hash(this.account.auth.password,10); 
            if(pass){
                this.account.auth.password = pass ;
            }
        }
    }catch(err){
        throw new Error('Hashing Password: '+err) ;
    }   
});



// Statics 

// DoesUserExist

UserSchema.static('DoesUserExists',async function (email:string):Promise<boolean>{
    try{    
        const User = await this.findOne({"account.email":email})
        return User ? true : false ; 
    }catch(err){
        throw new Error('Does User Exists: '+err) ;
    }
})


// Change the password 

UserSchema.static('ChangeThePassword',async function (email:string,newPassword:string):Promise<boolean>{
    try{    
        const newPass = await bt.hash(newPassword,10);
        const User = await this.updateOne({'account.email':email},{"account.password.code":newPass})
        return User ? true : false ; 
    }catch(err){
        throw new Error('Change The Password: '+err) ;
    }
})


// Update the Profile Pic 

UserSchema.static('UpdateTheProfileImage',async function (email:string,url:string):Promise<boolean>{
    try{    
        const User = await this.updateOne({'account.email':email},{"account.pic":url});
        return User ? true : false ; 
    }catch(err){
        throw new Error('Update The Pic: '+err) ;
    }
})


// Methods

// Compare Passwords
UserSchema.method('ComparePasswords',async function(password:string):Promise<Boolean>{
    try{
        if(this.account.auth.password && this.account.auth.provider === 'email'){
            const res = await bt.compare(password,this.account.auth.password);
            return res ;
        }else {
            return false ;
        }
    }catch(err){
        throw new Error('Compare Passwords: '+err) ;
    }
});



const UserModel : UserModelType = models.Users || model('Users',UserSchema);

export default UserModel ;