var express = require('express');
var router = express.Router();


router.get('/:exhibit_ID', function(req, res, next){
    id = req.params.exhibit_ID;
    
    exhibitions =[
        {"exhibit_img": "http://localhost:3000/public/hall_MP.png",
                              "exhibit_name": "Mountain people",
                              "exhibit_loc": "GF",
                              "exhibit_id": "MP",
                              "exhibit_desc" : "It showcases indigenous habitants of the mountain regions of Nepal and the world. Their life style and culture are exposed impressively below this first basement hall, influencing the subconscious of the visitors that they are at the height to understand and know the information displayed just below them. <br> For the close observation, when the visitors stare down the basement, they are ushered by the museum guides to the adjoining video hall to orient them about the people, culture and the mountains of Khumbu region.",
                                "section_list":[{"section_name":"Mountain People of Nepal", "section_num": 1, "section_id":"MP_1"}, 
                                                {"section_name":"Mountain People of the World", "section_num": 2, "section_id":"MP_2"},
                                                {"section_name": "The Mandala", "section_num" : 3, "section_id":"MP_3"}]}, 
        {"exhibit_img": "http://localhost:3000/public/hall_WM.png",
                              "exhibit_name": "World Mountain",
                              "exhibit_loc": "BF",
                              "exhibit_id": "WM",                              
                              "exhibit_desc" : "Second hall is the Hall of World Mountains where visitors are introduced to the national and international mountains, historical background, highest peaks, Information of all 14 peaks over 8 thousand meters of height and their photographs are available in this section. Geological section in this hall displays collection of important rock samples that formed geological formation of the Mountain range.<br> Flora and fauna collected in picture and real stuffed replicas; plants and wild animals excite the visitors as if they are watching the serene beauty and real wild lives in the wild in yet another small section called corner of dedication, contributions of five prominent personalities are displayed",
                                "section_list":[{"section_name":"Mountain Section", "section_num": 1, "section_id":"WM_1"}, 
                                                {"section_name":"Geological Section", "section_num": 2, "section_id":"WM_2"},
                                                {"section_name": "Flora and Fauna Section", "section_num" : 3, "secion_id":"WM_3"},
                                                {"section_name": "Corner of Dedication", "section_num" : 4, "section_id":"WM_4"}]},
        {"exhibit_img": "http://localhost:3000/public/hall_MA.png",
                              "exhibit_name": "Mountain Activities",
                              "exhibit_loc": "BF",
                              "exhibit_id": "MA",                              
                              "exhibit_desc" :"This third hall displays the equipments, clothes, different professional loops of the ropes and photographs of French Expedition team leader; recorder holder Maurice Herzog who scaled Annapurna for the first time in 1950. Beside Herzog is Junko Tabei, the first Japanese women to scale Mt Everest. Timanishi, the\
first Manaslu summiteers and other climberʼs equipments are showcased here.<br> This hall also introduces fourteen peaks over eight thousand meters in a chronological order to the year they were conquered.<br><br> Equipment necessary for climbing mountains and rocks, their varieties and uses make the visitors familiar on how hard the scaling these mountains can be. Last but not the least is the famous legendry tales of Yeti, its myths, and publications of the illusive giant brown bear in one corner of the first floor. Although nobody has seen the creature, many have claimed of witnessing Yeti. Some have claimed to have photographed its foot prints on icy blanket, and some have seen it with their eyes closed. This section is dedicated to the Yeti whom nobody has seen but many like to believe in.",
                                "section_list":[{"section_name":"Mountaineering Section", "section_num": 1, "section_id":"MA_1"}, 
                                                {"section_name":"Mountaineering Equipment Section", "section_num": 2, "section_id":"MA_2"},
                                                {"section_name": "Mountain Ecoloby / Environment Section", "section_num" : 3, "section_id":"MA_3"},
                                                {"section_name": "Imaging Everest", "section_num" : 4, "section_id":"MA_4"},
                                                {"section_name": "Climate Change Section", "section_num" : 5, "section_id":"MA_5"},
                                                {"section_name": "Touch-screen", "section_num" : 6, "section_id":"MA_6"}]},
        {"exhibit_img": "http://localhost:3000/public/hall_AE.png",
                              "exhibit_name": [{"line":"Hall of"}, {"line":"Associates' Exhibition"}],
                              "exhibit_loc": "BF",
                              "exhibit_id": "AE",                              
                              "exhibit_desc" : "The displays in the hall of arrangements in the basement ends here, and the visitors move to the first floor for further information related to socioeconomic life of the mountain people, their activities in the different periods. The present activities and future planned activities for better conservation of environment, flora and fauna, for sustainable environment of the region. This section is called Hall of Associateʼs Guest exhibition. In this hall IUCN and ICIMOD display their past, present and future activities. The 39 quiz questions and their answers related to mountains are put on tin folios fixed along the railing to stimulate the visiting students with their IQ tests.",
                                "section_list":[{"section_name":"Lakhang", "section_num": 1, "section_id":"AE_1"}, 
                                                {"section_name":"Library", "section_num": 2, "section_id":"AE_2"},
                                                {"section_name": "Mt.Manaslu Model", "section_num" : 3, "section_id":"AE_3"},
                                                {"section_name": "Yak Model", "section_num" : 4, "section_id":"AE_4"}]}];
 res.json(exhibitions.filter(
      function(exhibitions){ return exhibitions.exhibit_id == id; }
  ));
});

   

module.exports = router;