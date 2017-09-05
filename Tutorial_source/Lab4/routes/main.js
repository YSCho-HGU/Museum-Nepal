var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
var db = mongo('museumdb', ['mainImg']);

router.get('/', function(req, res, next){
    db.mainImg.find({}, function(err, doc){
        if(err) res.send(err);
        res.json(doc);
    });
});

router.post('/', function(req, res) {
  var img_path = req.body.img_path;
  
  db.mainImg.insert(
        {
            img_path : img_path
        },
        function(err, doc){
          if(err) res.send(err);
          res.json(doc);
        }
    )
});

router.put('/:_id', function(req, res, next){
  var id = req.params._id;
  var img_path = req.body.img_path;
  
  db.mainImg.update(
    {
      _id:mongo.ObjectId(id)
    },{
      $set : {  
         img_path : img_path

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
 
    db.mainImg.remove(
        {
            _id:mongo.ObjectId(id)
        }, function (err,doc) {
            res.json(doc);
        }
    )
});



// router.get('/', function(req, res, next){
//   res.json([{"img_path": "http://localhost:3000/public/main_img_1.png"},
//             {"img_path": "http://localhost:3000/public/main_img_2.png"},
//             {"img_path": "http://localhost:3000/public/main_img_3.png"}]);
// })

module.exports = router;