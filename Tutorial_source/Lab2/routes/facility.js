var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json([{"facilities":"Library"},
             {"facilities":"Gorkha Village Restaurant"},
             {"facilities":"Souvenir Shop"},
             {"facilities": "Wall Climbing"},
             {"facilities":"Parking Lot"}])
});

router.get('/:facility', function(req, res, next){
  type =  req.params.facility;
  if(type == "Library")
    res.json([{"lib_img": "http://localhost:3000/public/lib_img.jpg"}, {"lib_name":"American Alpine Club"}, 
              {"lib_name":"Annapurna"}, 
              {"lib_name":"EC"}, 
              {"lib_name":"Eastern Himalaya"}, 
              {"lib_name":"Everest"}, 
              {"lib_name":"Fauna"}, 
              {"lib_name":"Flora"}, 
              {"lib_name":"French"}, 
              {"lib_name":"Geoscience"}, 
              {"lib_name":"Helbetica"}, 
              {"lib_name":"Himalaya"}, 
              {"lib_name":"ICIMOD"}, 
              {"lib_name":"IUCN"}, 
              {"lib_name":"Japanese"}, 
              {"lib_name":"Medicine"}, 
              {"lib_name":"MO"}, 
              {"lib_name":"Tibet, Central Asia"}, 
              {"lib_name":"Trekking"}, 
              {"lib_name":"Western Himalaya"}]);
else if(type == "Gorkha Village Restaurant")
    res.json([{"Restaruant_img": "http://localhost:3000/public/Restaurant_image.png"},
              {"capability": "10 Tables / Maximum 40 people"}, 
              {"menu":"Starter", 
              "dish":[{"dish_name": "Momo (Dumpling)- Chicken, Veg. Buff"},
                      {"dish_name":"Soup-Mushroom, Veg. Mix"}]},
              {"menu":"Salad", 
              "dish":[{"dish_name": "Green salad"},
                      {"dish_name":"Aloo salad"}]},
              {"menu":"Main dish", 
              "dish":[{"dish_name": "Nepali Khana set"},
                      {"dish_name": "Thakali Khana set"},
                      {"dish_name": "Fried Rice- Chicken, Veg. Buff."},
                      {"dish_name": "Thukpa - Chicken, Veg. Buff."},
                      {"dish_name": "Chowmein- Chicken, Veg. Buff."}, 
                      {"dish_name": "Curry set- Chicken, Veg. Buff."},
                      {"dish_name": "Tandoori Chicken"}
                      ]},
              {"menu":"Drink", 
              "dish":[{"dish_name": "Tea"},
                      {"dish_name":"Coffee"},
                      {"dish_name": "Cold Drink- Coke, Sprite, Fanta"}]}]);
else if(type == "Souvenir Shop")
    res.json([{"img": "http://localhost:3000/public/Souvenir_image.png"},
              {"product":"Bags", "price":"Rs.500~1000"},
              {"product":"Post Card", "price":"Rs.20~40"},
              {"product":"Magnetics", "price":"Rs.50~100"},
              {"product":"Wallet", "price":"Rs.400~800"},
              {"product":"Books", "price":"Rs.300~800"},
              {"product":"Bracelet", "price":"Rs.50~500"},
              {"product":"Miscellaneous goods", "price":"Rs.500~1500"}
            ]);
else if(type == "Wall Climbing")
    res.json([{"img": "http://localhost:3000/public/Climbing_image.png"}, 
              {"info_type":"Entry fee", "info_content":"free"},
              {"info_type":"Available Age", "info_content":"Up to 15"},
              {"info_type":"Location", "info_content":"Middle-east side"}
              ]);
else if(type == "Parking Lot")
    res.json([{"img":"http://localhost:3000/public/Parking_image.png"},
              {"info_type":"Parking fee", "info_content":"free"},
              {"info_type":"Available numbers", "info_content":"Up to 30"},
              {"info_type":"Location", "info_content":"Middle-east side"}
              ]);                            

  console.log(type);

  
});

module.exports = router;
