var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

  res.json([
{
"map_img": "http://localhost:3000/public/sitemap.jpg",
"map_name": "SITE MAP"
},
{
"map_img": "http://localhost:3000/public/basement.jpg",
"map_name": "UNDERGROUND"
},
{
"map_img": "http://localhost:3000/public/ground.jpg",
"map_name": "GROUND"
}
])
});

router.get('/info', function(req, res, next) {
  res.json([{
"map_name" : "SITE MAP",
"info" : "Office: 977-61-46042, 462322, 462336",
"info_type" : "contact"
}, {
"map_name" : "SITE MAP",
"info" : "Library: 977-61-46049",
"info_type" : "contact"
}, {
"map_name" : "SITE MAP",
"info" : "Souvenir shop: 977-61-46048",
"info_type" : "contact"
}, {
"map_name" : "SITE MAP",
"info" : "Gorkha Village Restaurant: 977-61-46047",
"info_type" : "contact"
}, 
{
"map_name" : "SITE MAP",
"info" : "Nepalese: Rs. 80.00",
"info_type" : "fee"
}, {
"map_name" : "SITE MAP",
"info" : "Students: Rs. 40.00",
"info_type" : "fee"
}, 
{
"map_name" : "SITE MAP",
"info" : "SAARC Countries' Visitors: Rs. 200.00",
"info_type" : "fee"
}, 
{
"map_name" : "SITE MAP",
"info" : "Foreigners: Rs. 400.00",
"info_type" : "fee"
}, 
{
"map_name" : "SITE MAP",
"info" : "Garden: Rs. 20.00",
"info_type" : "fee"
}, 
{
"map_name" : "UNDERGROUND",
"info" : "Hall of Mountain People",
"info_type" : "hall"
}, 
{
"map_name" : "UNDERGROUND",
"info" : "Hall of World Mountains",
"info_type" : "hall"
},
{
"map_name" : "UNDERGROUND",
"info" : "Hall of Mountain Activities ",
"info_type" : "hall"
}, 
{
"map_name" : "UNDERGROUND",
"info" : "Audio Visual Hall",
"info_type" : "others"
}, 
{
"map_name" : "UNDERGROUND",
"info" : "Office",
"info_type" : "others"
}, 
{
"map_name" : "UNDERGROUND",
"info" : "Rest Room",
"info_type" : "others"
}, 


{
"map_name" : "GROUND",
"info" : "Hall of Associates’ Exhibition",
"info_type" : "hall"
}, {
"map_name" : "GROUND",
"info" : "Conference Hall",
"info_type" : "facility"
}, {
"map_name" : "GROUND",
"info" : "Conference Hall",
"info_type" : "facility"
}, {
"map_name" : "GROUND",
"info" : "Library",
"info_type" : "facility"
}, {
"map_name" : "GROUND",
"info" : "Lekhang",
"info_type" : "facility"
}, {
"map_name" : "GROUND",
"info" : "Store",
"info_type" : "facility"
}, {
"map_name" : "GROUND",
"info" : "Baggage Box",
"info_type" : "facility"
},{
"map_name" : "GROUND",
"info" : "Museum Guide",
"info_type" : "facility"
}
])

});


module.exports = router;
