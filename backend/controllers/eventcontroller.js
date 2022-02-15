import AsyncHandler from "express-async-handler";
import Event from "../models/eventModel.js";


// @desc Fetch all products
// @route  GET api/events
// @access public

const getEvents = AsyncHandler(async(req,res)=>{

    const events = await Event.find({});

    res.json(events)

})


// @desc Fetch one product
// @route  GET api/events/:id
// @access public

const getEventById =AsyncHandler(async(req,res) =>{



    console.log(req.params.id)
    const event = await Event.findById(req.params.id);

    if(event){
        res.json(event)
    }else {

        res.status(404)
        throw new Error('')
    }

    



})


export { getEventById,getEvents}