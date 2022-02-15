
import mongoose from 'mongoose';


const connectDB = async () => {
    try {


        console.log(process.env.MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected : 
        ${conn.connection.host}`)


    }catch(error){

        console.error(`Error: ${error.message}`);
        console.log('Unable to connect to the Database')
        process.exit(1)

    }
}

// module.exports = connectDB ;

export default connectDB;