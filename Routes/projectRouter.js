const express = require ('express')

var router = express.Router();


var projectController = require ('../Controllers/projectController')

// api

router.post('/aboutProject', projectController.projectInfo)  

module.export = router;