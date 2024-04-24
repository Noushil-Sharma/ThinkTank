const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    organizer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,

    },
    companyName:{
        type:String,
        required:true
    },
    problemStatement:{
        type:String,
        required:true
    },
    timePeriod:{
        type:String,
        required:true
    },
    techStack:{
        type:[String],
        required:true
    }
})

module.exports = mongoose.model('Event', eventSchema);