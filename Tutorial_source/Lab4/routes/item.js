var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
var db = mongo('museumdb', ['museumItems']);

router.get('/details/:item_id', function(req, res, next){
  var item_id = req.params.item_id;
  db.museumItems.find({"item_id":item_id}, function(err, doc){
    if(err) res.send(err);
    res.json(doc);
  });

});

router.get('/list/:section_id', function(req, res, next){
  var section_id = req.params.section_id;
  db.museumItems.find({"section_id":section_id}, {_id:0, "item_id":1, "item_img":1, "item_name":1}, function(err, doc){
    if(err) res.send(err);
    res.json(doc);
  });
});


// router.get('/list/:section_id', function(req, res, next){
//   var section_id = req.params.section_id;
//  res.json(items.filter(
//       function(items){ return items.section_id == section_id }
//   ));
// });

router.get('/search/:item_name', function(req, res, next){
  var item_name = req.params.item_name;
  db.museumItems.find({"item_name": item_name}, {"item_id":1, "section_id":1, "_id":0}, function(err, doc){
    if(err) res.send(err);
    res.json(doc);
  })
});


router.post('/', function(req, res) {
  var item_id = req.body.item_id;
  var item_name = req.body.item_name;
  var item_img = req.body.item_img;
  var item_desc = req.body.item_desc;
  var item_video = req.body.item_video;
  var category_id = req.body.category_id;
  var section_id = req.body.section_id;
  var subsection_id = req.body.subsection_id;
  var item_hit_num = req.body.item_hit_num;
  var item_section = req.body.item_section;
  db.museumItems.insert(
        {
            item_id : item_id,
            item_name : item_name,
            item_img: item_img,
            item_desc: item_desc,
            item_video: item_video,
            category_id : category_id,
            section_id: section_id,
            subsection_id : subsection_id,
            item_hit_num : item_hit_num,
            item_section : item_section
        },
        function(err, doc){
          if(err) res.send(err);
          res.json(doc);
        }
    )
});

router.get('/hit/:item_id/:hit_num', function(req, res, next){
  var item_hit_num = parseInt(req.params.hit_num)+1;
  console.log("hi num"+item_hit_num);
  var item_id = req.params.item_id;
  console.log("item_id"+ item_id);
  db.museumItems.findAndModify({
    query: { item_id: item_id },
    update: { $set: { item_hit_num: item_hit_num } },
    new: false
}, function (err, doc, lastErrorObject) {
    console.log("update"+ item_hit_num);
      if(err) res.send(err);
      res.json(doc);
})
});

router.put('/:_id', function(req, res, next){
  var id = req.params._id;

  var item_id = req.body.item_id;
  var item_name = req.body.item_name;
  var item_img = req.body.item_img;
  var item_desc = req.body.item_desc;
  var item_video = req.body.item_video;
  var category_id = req.body.category_id;
  var section_id = req.body.section_id;
  var subsection_id = req.body.subsection_id;
  var item_hit_num = req.body.item_hit_num;
  var item_section = req.body.item_section;
  db.museumItems.update(
    {
      _id:mongo.ObjectId(id)
    },{
      $set : {
            
            item_id : item_id,
            item_name : item_name,
            item_img: item_img,
            item_desc: item_desc,
            item_video: item_video,
            category_id : category_id,
            section_id: section_id,
            subsection_id : subsection_id,
            item_hit_num : item_hit_num,
            item_section : item_section            
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
 
    db.museumItems.remove(
        {
            _id:mongo.ObjectId(id)
        }, function (err,doc) {
            res.json(doc);
        }
    )
});

module.exports = router;
