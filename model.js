const mongoose = require("mongoose")
const Schema = mongoose.Schema
const projectsdetails= new Schema({

    ProjectID:{
      type:String,
      require:true
    },
    ProjectName:{
        type:String,
        require:true
    },
    AssignedTo:{
        type:String
    },
    Role:{
        typr:String
    },
    Task:{
        type:String
    },
    Description:{
        type:String
    },
    StratTime:{
        type:Date,
        default:Date.now()
        
    },
    EndTime:{
        type:Date,
        default:Date.now()
        
    },
    Status:{
        type:String
    },
})

module.exports = mongoose.model('projects details',projectsdetails)


