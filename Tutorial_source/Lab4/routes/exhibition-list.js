var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
var db = mongo('museumdb', ['exhibitionList']);

router.get('/', function(req, res, next){
    db.exhibitionList.find().sort({index:1}, function(err, doc){
        if(err) res.send(err);
        res.json(doc);
    });
});

router.post('/', function(req, res){
    var exhibit_img = req.body.exhibit_img;
    var exhibit_name = req.body.exhibit_name;
    var exhibit_loc = req.body.exhibit_loc;
    var id = req.body.exhibit_id;
    var index = req.body.index;
    db.exhibitionList.insert(
        {
            exhibit_img : exhibit_img,
            exhibit_name : exhibit_name,
            exhibit_loc : exhibit_loc,
            exhibit_id : id,
            index: index
        },
        function(err, doc){
            if(err) res.send(err);
            res.json(doc);
        })
});

router.delete('/:_id',function (req,res) {
    id = req.params._id;
 
    db.exhibitionList.remove(
        {
            _id:mongo.ObjectId(id)
        }, function (err,doc) {
            res.json(doc);
        }
    )
});
   

module.exports = router;


// router.get('/', function(req, res, next){
//     res.json([
// {
// "exhibit_img": "http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/public/hall_MP.png",
// "exhibit_name":"Mountain people",
// "exhibit_loc": "GF",
// "exhibit_id": "MP",
// "index": 1
// },
// {
// "exhibit_img": "http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/public/hall_WM.png",
// "exhibit_name":"World Mountain",
// "exhibit_loc": "BF",
// "exhibit_id": "WM",
// "index": 2
// },
// {
// "exhibit_img": "http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/public/hall_MA.png",
// "exhibit_name":"Mountain Activities",
// "exhibit_loc": "BF",
// "exhibit_id": "MA",
// "index": 3
// },
// {
// "exhibit_img": "http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/public/hall_AE.png",
// "exhibit_name":"Associates' Exhibition",
// "exhibit_loc": "BF",
// "exhibit_id": "AE",
// "index": 4
// }])
 
// });

// module.exports = router;