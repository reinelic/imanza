import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';


const protect = async(req,res, next) =>{

    let token  = req.headers.authorization;

    if(token && token.startsWith('Bearer')){

      try {

        let tokenR = token.split(' ')[1];

        console.log(tokenR)

        let decoded = jwt.verify(tokenR,process.env.JWT_SECRET);

        console.log(decoded);

        req.user = await User.findById(decoded.id).select('-password');

      
        next();

        
          
      } catch (error) {

        console.error(error)

        res.status(401)
          
      }

    }

}


export {protect}