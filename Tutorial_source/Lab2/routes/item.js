var express = require('express');
var router = express.Router();


items = 
[
{
"item_id": "A0",
"item_name": "The Tamang",
"item_img": "http://localhost:3000/public/A0.jpg",
"item_desc": "The Tamang are the indigenous inhabitants of the Himalayan regions of Nepal and India, their ancestral land is called Tamsaling. They are the aborigines of Yambu, or Kathmandu Valley, who had self-rule and autonomous roughly 2 centuries before present systematically displaced during the expansion period of Gorkha Kingdom and this continues to the present day, the Central Development Region, Nepal remains where 70% of the population reside. The traditionally Buddhist Tamang are the largest Tibeto-Burman ethnic group within Nepal, constituting 5.6% of the national population of over 1.3 million in 2001, increasing to 1,539,830 as of 2011 census, yet contested. Tamang are also a significant minority in Sikkim and Darjeeling District of West Bengal of India as permanent settlers; their languages are fifth most spoken in Nepal (note all Tamang languages are not mutually intelligible). They were one of the aborigines who were least affected by Nepalisation. Peculiar to Tamang people are complex marriage restrictions within the community.",
"item_video": "https://www.youtube.com/watch?v=ZGjkIB_o9UQ",
"category_id": "MP",
"section_id": "MP_1",
"subsection_id": "1",
"item_hit_num": 7,
"item_section": "Mountain People of Nepal Section"
},
{
"item_id": "A1",
"item_name": "The Sherpa",
"item_img": "http://localhost:3000/public/A1.jpg",
"item_desc": "Sherpa (Tibetan: \"eastern people\", from shar \"east\" and pa \"people\") are an ethnic group from the most mountainous region of Nepal, the Himalayas Sherpa as a surname is the result of mistaken census takers of the Nepalese government. Not recognizing that some people only had one name at the time, census takers wrote \"Sherpa\" in the place of a last name. The surname \"Sherpa\" was adapted and involuntarily used as last names even though last names are not part of Sherpa culture. Most Sherpa people live in Nepal's eastern regions; however, some live farther west in the Rolwaling valley and in the Helambu region north of Kathmandu. Tengboche is the oldest Sherpa village in Nepal. Sherpa people also live in Tibet, Bhutan, as well as in the Indian states of Sikkim and the northern portion of West Bengal, specifically the district of Darjeeling. The Sherpa language belongs to the south branch of the Tibeto-Burman languages, and it is a mix of Eastern Tibet (Khamba) and Lhasa dialogue. However, this language is separate from Lhasa Tibetan and unintelligible to Lhasa speakers.",
"item_video": "https://www.youtube.com/watch?v=P2q-OI3Hxhk",
"category_id": "MP",
"section_id": "MP_1",
"subsection_id": "1",
"item_hit_num": 2,
"item_section": "Mountain People of Nepal Section"
},
{
"item_id": "A5",
"item_name": "The Ainu People",
"item_img": "http://localhost:3000/public/A5.jpg",
"item_desc": "The Ainu or the Aynu are an indigenous people of Japan. Today, The Ainu people are estimated to have population of 25,000 and have been completely assimilated into the Japanese society and, as a result, having no knowledge of their ancestry. The Ainu People are a society of hunter-gatherers, surviving mainly by hunting and fishing. The followed a religion which was based on natural phenomenon. In 1893, Anthropologist Arnold Henry Savage Landor described the Ainu as having deep-set eyes and an eye shape typical of Europeans, with a large and prominent browridge, large ears, hairy and prone to baldness, slightly flattened hook nose with large and broad nostrils, prominent cheek bones, large mouth and thick lips and a long region from nose to mouth and small chin region.",
"item_video": "non",
"category_id": "MP",
"section_id": "MP_2",
"subsection_id": "1",
"item_hit_num": 1,
"item_section": "Mountain People of the World Section"
},
{
"item_id": "B8",
"item_name": "Leopard",
"item_img": "http://localhost:3000/public/B8.jpg",
"item_desc": "The leopard (Panthera pardus) is one of the five \"big cats\" in the genus Panthera. It is a member of the family Felidae with a wide range in sub-Saharan Africa and parts of Asia.Fossil records suggest that in the Late Pleistocene it occurred in Europe and Japan Compared to other members of Felidae, the leopard has relatively short legs and a long body with a large skull. It is similar in appearance to the jaguar, but has a smaller, lighter physique. Its fur is marked with rosettes similar to those of the jaguar, but the leopard's rosettes are smaller and more densely packed, and do not usually have central spots as the jaguar's do. Both leopards and jaguars that are melanistic are known as black panthers. The leopard is distinguished by its well-camouflaged fur, opportunistic hunting behaviour, broad diet, and strength (which it uses to move heavy carcasses into trees), as well as its ability to adapt to various habitats ranging from rainforest to steppe, including arid and montane areas, and its ability to run at speeds of up to 58 kilometres per hour (36 mph).",
"item_video": "https://www.youtube.com/watch?v=CCer8juWoBg",
"category_id": "WM",
"section_id": "WM_3",
"subsection_id": "1",
"item_hit_num": 1,
"item_section": "Flora and Fauna Section"
},
{
"item_id": "B3",
"item_name": "Junko Tabei",
"item_img": "http://localhost:3000/public/B3.jpg",
"item_desc": "First Women Everest Summiteer",
"item_video": "non",
"category_id": "WM",
"section_id": "WM_1",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountain Section"
},
{
"item_id": "B2",
"item_name": "Maurice Herzog",
"item_img": "http://localhost:3000/public/B2.jpg",
"item_desc": "Team Member of the successful French Expedition who scaled a 8000m peak ( Mt. Annapurna I) for the first time in 1950",
"item_video": "non",
"category_id": "WM",
"section_id": "WM_1",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountain Section"
},
{
"item_id": "B0",
"item_name": "Ang Tarke Sherpa",
"item_img": "http://localhost:3000/public/B0.jpg",
"item_desc": "Nepalese mountain climber and explorer who acted as sherpa and later sirdarfor many Himalayan expeditions..",
"item_video": "non",
"category_id": "WM",
"section_id": "WM_1",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountain Section"
},
{
"item_id": "A2",
"item_name": "Chhantyal",
"item_img": "http://localhost:3000/public/A2.jpg",
"item_desc": "The Chhantyal language is spoken by approximately 2000 of the 10,000 ethnic Chhantyal. The Chhantyals live in the Baglung and Myagdi Districts of Nepal. The villages where the Chhantyal language is spoken are all located in the eastern portion of the Myagdi District and include the villages of Mangale Khani, Dwari, Ghyans Kharka, Caura Khani, Kuine Khani, Thara Khani, Patle Kharka, Malampahar, and Malkabang, most of which are shown on the map above, though sometimes under slightly different spellings. The region is mountainous and lies just south of the Dhaulagiri massif. The Chhantyal language is a member of the Tamangic group [along with Gurung, Thakali, Manangba, Nar-Phu and Tamang]. Within the group, it is lexically and grammatically closest to Thakali. Assessment of the internal relations within the group is complicated by a number of factors, among which is the fact that shared innovations may be the product of geographic contiguity as much as shared genetic background. Chhantyal, however, is in many respects the most deviant member of the group, lacking a tone system and having borrowed a large portion of its lexicon from Nepali. In addition, there appears to be a layer of Tibeto-Burman vocabulary that is not Tamangic.",
"item_video": "non",
"category_id": "MP",
"section_id": "MP_1",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountain People of Nepal Section"
},
{
"item_id": "A4",
"item_name": "Taiwanese People",
"item_img": "http://localhost:3000/public/A4.jpg",
"item_desc": "The population of Taiwan, consisting of over 23 million in 2002, is extremely dense because of the mountain range that covers much of the island. The city of Taipei has the highest population with 9,710 people per half square mile. Seventy percent of the population lives in urban areas, which leaves a great deal of space in the mountain and rural areas.",
"item_video": "non",
"category_id": "MP",
"section_id": "MP_2",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountain People of the World Section"
},
{
"_id": "596c3cdce26b0c10a3ba19ce",
"item_id": "A6",
"item_name": "The Mandala",
"item_img": "http://localhost:3000/public/A6.jpg",
"item_desc": "Mandala is a Sanskrit word meaning \"circle\". It is a symbol of significance in Hinduism and Buddhism. A mandala (Sanskrit: मण्डल, lit, circle) is a spiritual and ritual symbol in Hinduism and Buddhism, representing the universe. In common use, \"mandala\" has become a generic term for any diagram, chart or geometric pattern that represents the cosmos metaphysically or symbolically; a microcosm of the universe. The basic form of most mandalas is a square with four gates containing a circle with a centre point. Each gate is in the general shape of a T. Mandalas usually exhibit radial balance. The term appears in the Rigveda as the name of the sections of the work, but is also used in other religions and philosophies, particularly Buddhism. In various spiritual traditions, mandalas may be employed for focusing attention of practitioners and adepts, as a spiritual guidance tool, for establishing a sacred space, and as an aid to meditation and trance induction.",
"item_video": "non",
"category_id": "MP",
"section_id": "MP_3",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "The Mandala Section"
},
{
"_id": "596c3cede26b0c10a3ba19d0",
"item_id": "A3",
"item_name": "The Slovaks",
"item_img": "http://localhost:3000/public/A3.jpg",
"item_desc": "The Slovaks or Slovak people (Slovak: Slováci, singular Slovák, feminine Slovenka, plural Slovenky) are a nation and West Slavic ethnic group native to Slovakia who share a common ancestry, culture, history and speak the Slovak language.",
"item_video": "non",
"category_id": "MP",
"section_id": "MP_2",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountain People of the World Section"
},
{
"_id": "596c3cf6e26b0c10a3ba19d1",
"item_id": "B1",
"item_name": "Annapurna",
"item_img": "http://localhost:3000/public/B1.jpg",
"item_desc": "Annapurna (Sanskrit, Nepali, Newar: अन्पूणर्) is a massif in the Himalayas in north-central Nepal that includes one peak over 8,000 metres (26,000 ft), thirteen peaks over 7,000 metres (23,000 ft), and sixteen more over 6,000 metres (20,000 ft). The massif is 55 kilometres (34 mi) long, and is bound by the Kali Gandaki Gorge on the west, the Marshyangdi River on the north and east, and by Pokhara Valley on the south. At the western end, the massif encloses a high basin called the Annapurna Sanctuary. Annapurna I Main is the tenth highest mountain in the world at 8,091 metres (26,545 ft) above sea level. The entire massif and surrounding area is protected within the 7,629 square kilometres (2,946 sq mi) Annapurna Conservation Area, the first and largest conservation area in Nepal. The Annapurna Conservation Area is home to several world-class treks, including the Annapurna Circuit.",
"item_video": "https://www.youtube.com/watch?v=TCE7bouGZRc",
"category_id": "WM",
"section_id": "WM_1",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountain Section"
},
{
"_id": "596c3d00e26b0c10a3ba19d2",
"item_id": "B4",
"item_name": "Toshi Imanishi",
"item_img": "http://localhost:3000/public/B4.jpg",
"item_desc": "First Mt. Manaslu Summiteer",
"item_video": "non",
"category_id": "WM",
"section_id": "WM_1",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountain Section"
},
{
"_id": "596c3d08e26b0c10a3ba19d3",
"item_id": "B5",
"item_name": "Lionel Terrey",
"item_img": "http://localhost:3000/public/B5.jpg",
"item_desc": "First Makalu Summiteer",
"item_video": "non",
"category_id": "WM",
"section_id": "WM_1",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountain Section"
},
{
"_id": "596c3dd3e26b0c10a3ba19d5",
"item_id": "B6",
"item_name": "Park Yong Seok",
"item_img": "http://localhost:3000/public/B6.PNG",
"item_desc": "First Asian to summit all Fourteen 8000m peaks in the world",
"item_video": "non",
"category_id": "WM",
"section_id": "WM_1",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountain Section"
},
{
"_id": "596c3ddfe26b0c10a3ba19d6",
"item_id": "B7",
"item_name": "mahesh shakya",
"item_img": "http://localhost:3000/public/B7.jpg",
"item_desc": "Karma was born as Mahesh Shakya in Kathmandu. He studied at St. Xaviers School in Kathmandu and then went to Pune, India to pursue further studies. He was passionate about acting. One day, he happened to come across a newspaper clipping of Quest Entertainment for a casting call. He thought of giving it a try and was selected as the lead role for Sano Sansar, which marked his debut in the Nepali film industry. Karma has also sung for some Nepali films such as Ghintang Ghisi Twak in Lukamari.",
"item_video": "non",
"category_id": "WM",
"section_id": "WM_2",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Geological Section"
},
{
"_id": "596c3de7e26b0c10a3ba19d7",
"item_id": "B9",
"item_name": "Reverend Ikai Kawaguchi",
"item_img": "http://localhost:3000/public/B9.PNG",
"item_desc": "First Japanese to Visit Nepal, 1899",
"item_video": "non",
"category_id": "WM",
"section_id": "WM_4",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Corner of Dedications"
},
{
"_id": "596c3deee26b0c10a3ba19d8",
"item_id": "B10",
"item_name": "Dr. Toni Hagen",
"item_img": "http://localhost:3000/public/B10.jpg",
"item_desc": "Swiss Explorer and Geologist",
"item_video": "non",
"category_id": "WM",
"section_id": "WM_4",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Corner of Dedications"
},
{
"_id": "596c3df5e26b0c10a3ba19d9",
"item_id": "B11",
"item_name": "Kumar Khadga Bikram Shah",
"item_img": "http://localhost:3000/public/B11.jpg",
"item_desc": "Interpreted the vision of Internation Mountain Museum",
"item_video": "non",
"category_id": "WM",
"section_id": "WM_4",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Corner of Dedications"
},
{
"_id": "596c3dfce26b0c10a3ba19da",
"item_id": "B12",
"item_name": "Dr. Harka Gurung",
"item_img": "http://localhost:3000/public/B12.jpg",
"item_desc": "Geographer, Conservationist",
"item_video": "non",
"category_id": "WM",
"section_id": "WM_4",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Corner of Dedications"
},
{
"_id": "596c3e02e26b0c10a3ba19db",
"item_id": "B13",
"item_name": "Dawa Norbu Sherpa",
"item_img": "http://localhost:3000/public/B13.PNG",
"item_desc": "Prominent Contributor to the construction of the International Mountain Museum",
"item_video": "non",
"category_id": "WM",
"section_id": "WM_4",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Corner of Dedications"
},
{
"_id": "596c3e0de26b0c10a3ba19dc",
"item_id": "C2",
"item_name": "Mountain coil",
"item_img": "http://localhost:3000/public/C2.PNG",
"item_desc": "In mountain sports, especially climbing, a rope team is a group of mountaineers or climbers who are linked together by a safety rope. In a more general sense, a group of mountaineers, who are travelling together, may also be known as rope team. The common safety rope helps to protect members of the rope part from falling. That said, it may also heighten the risk for the group as a whole because, unfavourable conditions, the fall of a single member may pull the entire party down as well. When climbing or in steep terrain where there is a high risk of falling, the rope is also secured to fixed points in the rock or ice. At the same time a \"sliding rope\" (gleitendes Seil) may be used or the rope may be fixed to a top anchor (Standplatz). A distinction is made between groups of two, three and four persons.",
"item_video": "https://www.youtube.com/watch?v=4WXhPcakhNk",
"category_id": "MA",
"section_id": "MA_2",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountaineering Equipment Section"
},
{
"_id": "596c3e39e26b0c10a3ba19de",
"item_id": "C3",
"item_name": "Oxygen cylinder",
"item_img": "http://localhost:3000/public/C3.PNG",
"item_desc": "A gas cylinder or tank is a pressure vessel used to store gases at above atmospheric pressure. High-pressure gas cylinders are also called bottles. There are four cases: either the substance remains a gas at standard temperature but increased pressure, the substance liquefies at standard temperature but increased pressure, the substance is dissolved in a solvent, or the substance is liquefied at reduced temperature and increased pressure. In the last case the bottle is constructed with an inner and outer shell separated by a vacuum (dewar flask) so that the low temperature can be maintained by evaporative cooling.",
"item_video": "https://www.youtube.com/watch?v=0FJ72WtGTAc",
"category_id": "MA",
"section_id": "MA_2",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountaineering Equipment Section"
},
{
"_id": "596c3e46e26b0c10a3ba19df",
"item_id": "C4",
"item_name": "Ski boot",
"item_img": "http://localhost:3000/public/C4.PNG",
"item_desc": "Ski boots are footwear used in skiing to provide a way to attach the skier to skis using ski bindings. The ski/boot/binding combination is used to effectively transmit control inputs from the skier's legs to the snow.",
"item_video": "https://www.youtube.com/watch?v=fgVP8D1cML8",
"category_id": "MA",
"section_id": "MA_2",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountaineering Equipment Section"
},
{
"_id": "596c3e53e26b0c10a3ba19e0",
"item_id": "C0",
"item_name": "Environment",
"item_img": "http://localhost:3000/public/C0.PNG",
"item_desc": "This section presents the environmental information of the mountain region.",
"item_video": "non",
"category_id": "MA",
"section_id": "MA_1",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountaineering Section"
},
{
"_id": "596c3e5be26b0c10a3ba19e1",
"item_id": "C1",
"item_name": "Mountaineering Garbage Exhibit",
"item_img": "http://localhost:3000/public/C1.PNG",
"item_desc": "This section exhibits the garbage collected from Mt. Everest and Mt. Lhotse between 2000 and 2003 by Mountaineer and environmentalist Mr. Ken Neguchi.",
"item_video": "non",
"category_id": "MA",
"section_id": "MA_1",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mountaineering Section"
},
{
"_id": "596c3e63e26b0c10a3ba19e2",
"item_id": "C6",
"item_name": "Stamps",
"item_img": "http://localhost:3000/public/C6.jpg",
"item_desc": "Stamp Collections with images of Mt. Everest issued by Nepal and other countries of the World",
"item_video": "non",
"category_id": "MA",
"section_id": "MA_5",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Stamp Collection of Everest"
},
{
"_id": "596c3e6ce26b0c10a3ba19e3",
"item_id": "C5",
"item_name": "British expeditions to Mt. Everest",
"item_img": "http://localhost:3000/public/C5.jpg",
"item_desc": "This section displays the photographs of the British expeditions to Mt. Everest from 1921 until successful expedition of 1953 presented to the IMM by the British Council and the Royal Geographic Society",
"item_video": "non",
"category_id": "MA",
"section_id": "MA_4",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Imaging Everest"
},
{
"_id": "596c3e72e26b0c10a3ba19e4",
"item_id": "C9",
"item_name": "Machapuchare stamp",
"item_img": "http://localhost:3000/public/C9.png",
"item_desc": "National stamp postal service from Nepal. Himalayan stamps.",
"item_video": "non",
"category_id": "MA",
"section_id": "MA_5",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Stamp Collection of Everest"
},
{
"_id": "596c3e79e26b0c10a3ba19e5",
"item_id": "C7",
"item_name": "Confluence of Imja Khola and Lobuche Khola",
"item_img": "http://localhost:3000/public/C7.jpg",
"item_desc": "This panoramic image depicts Upper Khumbu basin. This valley resides in between two beautiful Peaks, Mt. Ama Dablam(6812m) and Mt. Taboche(6501m). The water that melts from the Imjaa glacier creates the Imja river. This river, which passes through the Dingboche village mixes with the Lobuche river created by the khumbu glacier. The river then passes through Fungki Tengka village, and ultimately mixing with the Dudhkoshi river as it flows south.",
"item_video": "non",
"category_id": "MA",
"section_id": "MA_6",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Climate Change Section"
},
{
"_id": "596c3e82e26b0c10a3ba19e6",
"item_id": "C10",
"item_name": "BAUDDHANATH Monument Zone stamp",
"item_img": "http://localhost:3000/public/C10.png",
"item_desc": "National stamp postal service from Nepal. BAUDDHANATH Monument Zone stamps.",
"item_video": "non",
"category_id": "MA",
"section_id": "MA_5",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Stamp Collection of Everest"
},
{
"_id": "596c3e88e26b0c10a3ba19e7",
"item_id": "D0",
"item_name": "Lakhang",
"item_img": "http://localhost:3000/public/D0.jpg",
"item_desc": "A replica of Lakhang, a prayer room, has also been built. THe Lakhang helps the interested in internalising the true sensitivity of the Buddhist Prayer room. The Lakhang is always open for offering prayers. It reflects the culture of the people living in the Himalayan Region.",
"item_video": "non",
"category_id": "AE",
"section_id": "AE_1",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Lakhang"
},
{
"_id": "596c3e92e26b0c10a3ba19e8",
"item_id": "D1",
"item_name": "Library",
"item_img": "http://localhost:3000/public/D1.PNG",
"item_desc": "The IMM library to the right of the Lakhang Room has a large collection of books on mountains, flora and fauna, mountain people and mountaineering for the benefits of scholars, researchers and students.",
"item_video": "non",
"category_id": "AE",
"section_id": "AE_2",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Library"
},
{
"_id": "596c3e9de26b0c10a3ba19e9",
"item_id": "D2",
"item_name": "Mt. Manaslu Model",
"item_img": "http://localhost:3000/public/D2.PNG",
"item_desc": "Manaslu (Nepali: मनास्लु, also known as Kutang) is the eighth highest mountain in the world at 8,163 metres (26,781 ft) above sea level. It is located in the Mansiri Himal, part of the Nepalese Himalayas, in the west-central part of Nepal. Its name, which means \"mountain of the spirit\", comes from the Sanskrit word manasa, meaning \"intellect\" or \"soul\". Manaslu was first climbed on May 9, 1956 by Toshio Imanishi and Gyalzen Norbu, members of a Japanese expedition. It is said that \"just as the British consider Everest their mountain, Manaslu has always been a Japanese mountain\". Manaslu Peak Manaslu is the highest peak in the Gorkha District and is located about 64 km (40 mi) east of Annapurna. The mountain's long ridges and valley glaciers offer feasible approaches from all directions, and culminate in a peak that towers steeply above its surrounding landscape, and is a dominant feature when viewed from afar.",
"item_video": "non",
"category_id": "AE",
"section_id": "AE_3",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Mt. Manaslu Model"
},
{
"_id": "596c3ea5e26b0c10a3ba19ea",
"item_id": "D3",
"item_name": "Yak Model",
"item_img": "http://localhost:3000/public/D3.PNG",
"item_desc": "Yaks are heavily built animals with a bulky frame, sturdy legs, and rounded cloven hooves, and extremely dense, long fur that hangs down lower than the belly. While wild yaks are generally dark, blackish to brown, in colouration, domestic yaks can be quite variable in colour, often having patches of rusty brown and cream. They have small ears and a wide forehead, with smooth horns that are generally dark in colour. In males, the horns sweep out from the sides of the head, and then curve forward; they typically range from 48 to 99 cm (19 to 39 in) in length. The horns of females are smaller, only 27 to 64 cm (11 to 25 in) in length, and have a more upright shape. Both sexes have a short neck with a pronounced hump over the shoulders, although this is larger and more visible in males.[3] Males weigh 350 to 580 kg (770 to 1,280 lb), females weigh 225 to 255 kg (496 to 562 lb). Wild yaks can be substantially heavier, males reaching weights of up to 1,000 kilograms (2,200 lb).",
"item_video": "non",
"category_id": "AE",
"section_id": "AE_4",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Yak Model"
},
{
"_id": "596c3eade26b0c10a3ba19eb",
"item_id": "C8",
"item_name": "Environment & Oxygen Tanks",
"item_img": "http://localhost:3000/public/C8.jpg",
"item_desc": "Manufactured in St. Petersburg Russia, the POISK oxygen cylinders are much demanded for climbing of Mt. Everest and other high 8000- meter peaks. Its volume, size and dimensions have been optimally designed to fit the needs of the high altitude climbers. Most oxygen systems require carrying a heavy bottle to the summit even though it may be close to empty The POISK system is designed to use two to three bottles for a summit day of 12 to 18 hours. This allows you to drop and empty bottle on the way to the summit and pick up a strategically placed bottle on the descent if needed. This way you have only one third the weight on your back as you approach the summit. The adjacent photo is a picture of oxygen cylinders the Sherpas retrieved from high on the mountain. In the past many bottles have been left behind on the mountain causing worldwide attention around the debris left behind by expeditions. Today Sherpas are paid a fee to return them for refilling. One POISK –3 high-pressure bottles filled to 260 Bar at 20 degrees Celsius weighs under six pounds (2.7 kg). The dimensions of the bottle are 19 inches long and 4.25 inches in diameter. Four bottles can easily fit into a medium size pack. These bottles are extremely reliable and easy to use. At a 2- liter per minute flow the bottles last approximately 6.5 hours..",
"item_video": "non",
"category_id": "MA",
"section_id": "MA_6",
"subsection_id": "1",
"item_hit_num": 0,
"item_section": "Climate Change Section"
}
];


router.get('/details/:item_id', function(req, res, next){
  item_id = req.params.item_id;

 res.json(items.filter(
      function(items){ return items.item_id == item_id }
  ));


});

router.get('/list/:section_id', function(req, res, next){
  var section_id = req.params.section_id;
 res.json(items.filter(
      function(items){ return items.section_id == section_id }
  ));
});

module.exports = router;
