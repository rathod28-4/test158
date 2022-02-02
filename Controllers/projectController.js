
const Project = require('../DataBase/projectDetails')

// exports.projectInfo = (req, res)=>{
//     res.send("Project Details add to DataBase Successfully");
// }

exports.projectInfo = (req, res)=>{

    Project.insertMany({"Project_ID" : req.body.Project_ID, "Project_Name": req.body.Project_Name , "Project_Details":req.body.Project_Details })

    .then((result) => {
        console.log(result);
        res.send("Project Details add in DataBase Successfully")
   
    }).catch((error) => {
        console.log(error);

        res.send("Somthing went wrong");

    })


}