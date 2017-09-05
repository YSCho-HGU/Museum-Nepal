var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json([
{
"exhibit_img": "http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/public/hall_MP.png",
"exhibit_name":"Mountain people",
"exhibit_loc": "GF",
"exhibit_id": "MP",
"index": 1
},
{
"exhibit_img": "http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/public/hall_WM.png",
"exhibit_name":"World Mountain",
"exhibit_loc": "BF",
"exhibit_id": "WM",
"index": 2
},
{
"exhibit_img": "http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/public/hall_MA.png",
"exhibit_name":"Mountain Activities",
"exhibit_loc": "BF",
"exhibit_id": "MA",
"index": 3
},
{
"exhibit_img": "http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/public/hall_AE.png",
"exhibit_name":"Associates' Exhibition",
"exhibit_loc": "BF",
"exhibit_id": "AE",
"index": 4
}])
 
});

module.exports = router;