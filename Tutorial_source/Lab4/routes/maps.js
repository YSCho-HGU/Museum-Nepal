var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
//map name and image
var db = mongo('museumdb', ['map']);
//information
var db_info = mongo('museumdb', ['mapInfo']);

//map img and map name
router.get('/', function(req, res, next){
    db.map.find({}, function(err, doc){
        if(err) res.send(err);
        res.json(doc);
    });
});

router.post('/', function(req, res) {
  var map_img = req.body.map_img;
  var map_name = req.body.map_name;
  
  db.map.insert(
        {
            map_img : map_img,
            map_name : map_name
        },
        function(err, doc){
          if(err) res.send(err);
          res.json(doc);
        }
    )
});

router.put('/:_id', function(req, res, next){
  var id = req.params._id;
  var map_name = req.body.map_name;
  var map_img = req.body.map_img;
  
  db.map.update(
    {
      _id:mongo.ObjectId(id)
    },{
      $set : {  
            map_name : map_name,
            map_img : map_img           
      }
    }, {upset : false},
    function (err, doc){
      if(err) res.send(err);
      res.json(doc);
    }
  )
});

router.delete('/:_id',function (req,res) {
    id = req.params._id;
 
    db.map.remove(
        {
            _id:mongo.ObjectId(id)
        }, function (err,doc) {
            res.json(doc);
        }
    )
});


//-------------map info
router.get('/info', function(req, res){
  db_info.mapInfo.find({}, function(err, doc){
          if(err) res.send(err);
          res.json(doc);
      });
});

router.post('/info', function(req, res) {
  var map_name = req.params.map_name;
  var info = req.body.info;
  var info_type = req.body.info_type;

  db_info.mapInfo.insert(
        {
            map_name : map_name,
            info :info,
            info_type : info_type
            
        },
        function(err, doc){
          if(err) res.send(err);
          res.json(doc);
        }
    )
});


router.put('/info/:_id', function(req, res, next){
  var map_name = req.params.map_name;
  var info = req.body.info;
  var info_type = req.body.info_type;
  
  db_info.mapInfo.update(
    {
      _id:mongo.ObjectId(id)
    },{
      $set : {  
           map_name : map_name,
            info :info,
            info_type : info_type         
      }
    }, {upset : false},
    function (err, doc){
      if(err) res.send(err);
      res.json(doc);
    }
  )
});

router.delete('/info/:_id',function (req,res) {
    id = req.params._id;
 
    db_info.mapInfo.remove(
        {
            _id:mongo.ObjectId(id)
        }, function (err,doc) {
            res.json(doc);
        }
    )
});

module.exports = router;
