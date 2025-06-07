const user=require("../Model/user")
const jwt=require("jsonwebtoken");


  // registration auth
export const registration=async (req,res)=>
{
    try {
        const {name,email,password}=req.body;

        //to check the existing user
        
        let existing=await user.findOne({email})
        if(existing)
        {
            res.status(400).json({
                message:"user already in use with this email"
            })
        }

        // create new user
        const user=new user({name,email,password});
        await user.save();

        // genrate jwt token

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:"1h"
        })
       
        res.status(201).json({token,user:{id:user._id,name:user.name,email:user.email}})
    } catch (error) {
        console.log("error");
        res.status(500).json({message:"server error during registaration"})
    }
}

// login auth
export const login= async (req,res)=>
{
    try {
        const {email,password}=req.body;

        // find the user by email

        const user=await user.findOne({email});
        if(!user)
        {
            return res.status(400).json({
                message:"Invalid credentials"
            })
        }
    // check the password
       const ismatch=await user.comaparePassword(password)
       if(!ismatch)
       {
            return res.status(400).json({
                message:"Invalid credentials"
            })
       }

    // generate jwt token
       const token=jwt.sign({id: user._id},process.env.JWT_SECRET,{
        expiresIn:"1h"
       })
    res.status(201).json({token,user:{id:user._id,name:user.name,email:user.email}})

    } catch (error) {
        console.log("error");
        res.status(500).json({message:"server error during login"});

    }
}