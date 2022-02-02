const bcrypt = require('bcrypt');       // for password

const Admin = require('../DataBase/Admin')     // connect database

//exports.regAdmin = (req, res) => {
    //Admin.insertMany({ "firstName": req.body.firstName, "lastName": req.body.lastName, "email": req.body.email, "mobile": req.body.mobile, "password": req.body.password })

     // res.send("Admin Registered");}


// exports.loginAdmin = (req, res) => {
//     // res.send("login Successfully");}

exports.regAdmin = (req, res) => {

    bcrypt.genSalt(10, function (err, salt) {
        // console.log(salt)
        bcrypt.hash(String (req.body.password), salt)

            .then((hash) => {
                //console.log(hash)
              //  res.send(hash)

         //   })
         Admin.insertMany({ "firstName": req.body.firstName, "lastName": req.body.lastName, "email": req.body.email, "mobile": req.body.mobile, "password": hash})
         //Admin.insertMany({ "name": req.body.name, "mobile": req.body.mobile, "email": req.body.email, "password": hash })

            .then((result) => {

                console.log(result)
                res.send("Admin Registered")

            })
            .catch((error) => {
                console.log(error.code)

                if (error.code == 11000) {
                    res.send("Admin Already Registered")
                }

                else {
                 
                    res.send("Something went Wrong")
                }
            })

         }).catch((err) => {
             console.log(err)
            res.send("Error in Generate Hash")
         })

    })

}
exports.loginAdmin  =  (req,res) =>{

    Admin.findOne({"email" : req.body.email}).then((data)=>{
        console.log(data)

        if(data  ===  null || data === undefined  )
        {

            res.send("You Are Not a Registered User")
        }
        else
        {
            // res.status(200).send({ msg :  "Data Found with hash "  , hash : data.password})

            bcrypt.compare(req.body.password , data.password  ,function(err , result){
                if(err){

                    res.status(400).send("Somenthing Went Wrong")
                }

                if(result  === true )
                {
                    res.status(200).send({msg : "Login Successfully" , id : data.id })

                }
                else
                {
                    res.status(401).send({msg : "Login Failed" , id : null })

                }

            })
            
        }

    }).catch((err)=>{
        console.log(err)
        res.send("Error Occured")
    })

}








