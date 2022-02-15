import AsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

// @desc  Auth user & get token 
// @route  POST api/users/login
// @access public

 const authUser = AsyncHandler(async(req,res)=>{
   

    const{email,password} = req.body;

    const user  = await User.findOne({email})

  
    // let isUser =  await user.matchPassword(password) using the mongoose methods


    const isPassword = bcrypt.compare(password,user.password);

    
    if(user && isPassword){

        res.json({
            id: user._id,
            email:user.email,
            name:user.name,
            token:generateToken(user._id)
           

        })
    }
    else {

        res.status(401)
        throw new Error("Invalid email or password")
    }
    

})


// @desc  Get User  Profile 
// @route  GET api/users/login
// @access private

const getProfile = AsyncHandler(async(req,res)=>{

    console.log(req.user)
   
    let user = await User.findById(req.user._id);


    try {
        if(user){

            res.json ({
                email : user.email,
                name: user.name
        
            })

        }
        
    } catch (error) {

        console.error(error);
        
        
    }
   

res.send("success");
    

})


// @desc  Register  user 
// @route  POST api/users/
// @access public

const registerUser = AsyncHandler(async(req,res)=>{
   

    const{name,email,password} = req.body;
     
    let userExists = await User.findOne({email})

    if(userExists){

        res.status('201')
    }

    try {

      let newUser = await User.create({email,name,password});

      res.json({
          email,
          name
      })
        
    } catch (error) {

        console.error(error);
        
    }
    
    
  
    
    

})

export  { authUser,getProfile,registerUser}