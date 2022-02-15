import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';
import users from './data/users.js';
import events from './data/events.js';
import User from './models/userModel.js'
import Event from './models/eventModel.js';
import connectDB from './config/db.js';



dotenv.config();

connectDB();

const importData = async () =>{

    try{
        // await Event.deleteMany();
        Event.collection.drop();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleEvent = events.map(
            ev =>  {

            return {
            ...ev,
            user:adminUser
        }}
        );

        console.log(`Events before saving in the DB :`)
        console.log(sampleEvent);

        await Event.insertMany(sampleEvent);

    }catch(error){

            console.error(`${error}`.red.inverse);
            process.exit();




    }


}
importData();