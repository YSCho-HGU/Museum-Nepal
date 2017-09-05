var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  res.json([{
"info_img": "http://localhost:3000/public/about_img.png",
"info": "Many people in the world may not know much about the small country\
called Nepal, but they certainly know about this peak, the tallest in the\
world, called Mount Everest.<br><br>\
Not only this highest peak, but also other 8 of the 14 peaks above the\
height of eight thousand meters in the world stand tall in Himalayan\
range of Nepal.<br><br> \
The Himalaya is the source of water resources for billions of people\
living in the world. Flora and fauna in the Himalayan range is the natural\
habitat for the thousands of known and unknown species that\
contribute in maintaining and restructuring the ecosystems of our\
world, day and night. The little surfaced cultural values of the mountain\
people, geological mysteries buried underneath; natureʼs serene\
beauty- wonders on its rock- hard and melting surfaces- make the\
Nepalese proud and people of the world an epicenter for their\
explorations. <br><br>\
Mountains and mountaineering have a history of their own. Without\
preserving it, it will not be long before all the records and evidences will\
be lost forever. Nepal Mountaineering Association (NMA), established\
on 1 Nov 1973, initiated the establishment of International Mountain\
Museum (IMM) in Pokhara. The basic objective for its establishment\
was made to record, document and chronicle the past and present\
development of mountaineering activities in the world in general and to\
preserve the saga of the momentous feats in the history of\
mountaineering in the Himalayan peaks in particular. The foundation\
stone of IMM was laid on 1 Dec, 1995. The soft opening of IMM took\
place on 29 May, 2002 where it was officially opened on 5 Feb, 2004.<br><br>\
Nepal's eight thousand meter high peaks records names of thousands\
of successful summiteers until now but its history is very young.<br>\
Mountaineers M. Herzog and Louis Lachenal scaled up Annapurna on 3\
June, 1950 and since then the records follow.<br><br>\
Himalayan range of Nepal is not important to the summiteers record\
holders only but also to the geologists, environmentalists and\
sociologists as it harbors innumerable mysteries and facts the\
scientists and geologists are striving hard to dig out.<br><br>\
And all its values and mysteries are showcased in the one and only\
Mountain Museum in the world - the International Mountain Museum,\
right at the footsteps of the Himalayan range, in Pokhara, Nepal.<br><br>\
With an objective of maintaining systematic records of the successful\
eight thousanders, geographic flora and fauna and human activities in\
the range, the International mountain Museum has been established at\
the foot step of fishtail peak and gate way to the mountain region. The\
shape of the museum roof itself resembles mountain skyline to any\
visitor before entering the museum main gate.\
"}]);
});




module.exports = router;