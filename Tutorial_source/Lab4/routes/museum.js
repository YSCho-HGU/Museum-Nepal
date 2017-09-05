var express =require('express');
var router = express.Router();
var mongo = require('mongojs');
var db = mongo('museumdb', ['museumInfo']);


router.get('/', function(req, res, next){
    db.museumInfo.find({}, function(err, doc){
        if(err) res.send(err);
        res.json(doc);
    });
});

router.post('/', function(req, res) {
  var info_img = req.body.info_img;
  var info = req.body.info;
  
  db.museumInfo.insert(
        {
            info_img : info_img,
            info : info
        },
        function(err, doc){
          if(err) res.send(err);
          res.json(doc);
        }
    )
});

router.put('/:_id', function(req, res, next){
  var id = req.params._id;
  var info_img = req.body.info_img;
  var info = req.body.info;
  
  db.museumInfo.update(
    {
      _id:mongo.ObjectId(id)
    },{
      $set : {  
        info_img : info_img,
        info : info

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
 
    db.museumInfo.remove(
        {
            _id:mongo.ObjectId(id)
        }, function (err,doc) {
            res.json(doc);
        }
    )
});

module.exports = router;