var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.json([{"img_path": "http://localhost:3000/public/main_img_1.png"},
            {"img_path": "http://localhost:3000/public/main_img_2.png"},
            {"img_path": "http://localhost:3000/public/main_img_3.png"}]);
})

module.exports = router;