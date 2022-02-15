import express from "express";
import {authUser,getProfile,registerUser} from '../controllers/userController.js'
import {protect} from '../middlewares/protect.js';
const router = express.Router();


// @desc Fetch a user 
// @route  GET api/users/login
// @access public

router.post('/login', authUser);

router.route('/').post(registerUser);

router.route('/profile').get(protect,getProfile);


export default router;