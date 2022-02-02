const express = require ('express')

var router = express.Router()

var adminController = require ('../Controllers/AdminController')

// api for Postman

//  http://localhost:4141/admin/register
router.post('/register', adminController.regAdmin)   //  for registration

//  http://localhost:4141/admin/login
router.post('/login', adminController.loginAdmin)     //  for login


module.exports = router;