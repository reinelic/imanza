import mongoose from 'mongoose';


const eventSchema = mongoose.Schema(
    {

        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User',
        },
        category:{type:String,required:true},
        description:{type:String,required:true},
        imageurl:{type:String}

        

    },
    {
        timestamps:true,
    }

)

const Event = mongoose.model('Event',eventSchema);

export default Event;



