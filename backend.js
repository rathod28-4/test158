const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());

// connect Routers

const adminRouter = require ('./Routes/adminRouter');
// const projectRouter = require ('./Routes/projectRouter')



const port = 4141;

// app.get('/',(req,res)=>{

//     res.send("Project Management Web App")
// })

/*
//headers to avoid cors error

app.use((req , res , next )=> {
	res.setHeader('Access-Control-Allow-Origin' ,'*');
	res.setHeader('Access-Control-Allow-Methods' ,'GET , POST , PUT , PATCH , DELETE');
	res.setHeader('Access-Control-Allow-Headers' ,'Content-Type, X-Requested-With , Accept , Origin, authorization'  );
	res.setHeader('Access-Control-Expose-Headers' , 'authorization');
	next();

});
*/

// Database connectivity with Server
const db = mongoose.connection

mongoose.connect('mongodb://localhost:27017/ProjectsDB',{})

db.once('open',()=>{
    console.log(`Active Database at http://localhost: ${port}` );
})

//admin main root

app.use('/admin', adminRouter);
// app.use('/adminProject', projectRouter);

// Server Listen
app.listen(port,()=>{

console.log(`Server is Connected on http://localhost: ${port}`)

})

