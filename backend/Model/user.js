import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Userschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
       required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    }
})
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Instance method to compare password
UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Create a model for the user schema
const User=mongoose.model("User",Userschema);
export default User;