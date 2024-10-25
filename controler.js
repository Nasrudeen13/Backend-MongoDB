const projectsdetails = require("../model/model")


const displayAllProjects = async (req,res) =>{ 
const details = await projectsdetails.find();
res.status(200).json(details);
}

const displayParticularProject = async (req,res) => { 
const id = req.params.id
const details = await projectsdetails.findById(id)
res.status(200).json(details);   
}

const createProjects = async (req,res)=>{
 const details = await projectsdetails.create({
     ProjectID: "60",
     ProjectName: "Maps",
     AssignedTo: "anitha",
      Role:"developer",
      Task:"create a map website",
      Description:"A map is a visual representation of a place or area that uses symbols, colors, and line styles to show its features",
      Status:"in process"
 })     
 res.send("store successfully")
}

const updateProject = async (req,res) =>{
    const id = req.params.id
    console.log(id)
    req.header('Content-Type', 'application/json');
    const details = await projectsdetails.findByIdAndUpdate(id,
        {
          ProjectName:"E-commerce page" , 
          AssignedTo : "Anitha"

        },
    )


    res.status(200).json(details)
}


  

const deleteProject = async (req,res) =>{
const id = req.params.id
const details = await projectsdetails.findByIdAndDelete(id)
res.status(200).json(details)

}





module.exports = {displayAllProjects,displayParticularProject,createProjects,updateProject,deleteProject}