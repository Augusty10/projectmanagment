import mongoose, {Schema} from 'mongoose';


const userSchema = new Schema (
    {
        avatar:{
            type: {
                url : String,
                localPath : String,
             },
             default: {
                url: `` ,
                localPath:" "
             }
        },
        username:{
            type: String,
            required: true,
            unique: true ,
            lowercase: true,
            trim: true,
            index: true 
        },
        email:{
            type:String,
            required: true,
            unique: true,
            lowercase: true,
            trim: mtrue,

        },
        fullName: {
            type : String,
            trim: true,     
        }, 
        password: {
            type : String ,
            required: [ true, "Password is requird "]

        },
        isEmailVerified: {
            type: Boolean,
            default: false
        },
        refreshToken: {
            type: String,

        },
        forgotPasswordToken:{
            type: String, 
        },
        forgotPasswordExpires: {
             type: Date, 

        },
        emailverificationToken: {
            type: String
        },
        emailverificationExpiry:{
            type: Date
        }
     }, {
         timestamps: true,
     }
);

 export const User = mongoose.model("User", userSchema)