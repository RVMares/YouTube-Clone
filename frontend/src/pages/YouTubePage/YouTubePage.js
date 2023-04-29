import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import VideoMapper from "../../components/VideoMapper/VideoMapper";
import VideoList from "../../components/VideoList/VideoList";

const YouTubePage = () => {
  const [videos, setVideos] = useState([
    {
        "kind": "youtube#video",
        "etag": "WpSPSUTKN1HhPUZXxQq0xk1Az-s",
        "id": "Ks-_Mh1QhMc",
        "snippet": {
            "publishedAt": "2012-10-01T15:27:35Z",
            "channelId": "UCAuUUnT6oDeKwE6v1NGQxug",
            "title": "Your body language may shape who you are | Amy Cuddy",
            "description": "Body language affects how others see us, but it may also change how we see ourselves. Social psychologist Amy Cuddy argues that \"power posing\" -- standing in a posture of confidence, even when we don't feel confident -- can boost feelings of confidence, and might have an impact on our chances for success. (Note: Some of the findings presented in this talk have been referenced in an ongoing debate among social scientists about robustness and reproducibility. Read Amy Cuddy's response here: http://ideas.ted.com/inside-the-debate-about-power-posing-a-q-a-with-amy-cuddy/)\n\nGet TED Talks recommended just for you! Learn more at https://www.ted.com/signup.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "TED",
            "tags": [
                "Amy Cuddy",
                "TED",
                "TEDTalk",
                "TEDTalks",
                "TED Talk",
                "TED Talks",
                "TEDGlobal",
                "brain",
                "business",
                "psychology",
                "self",
                "success"
            ],
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
                "title": "Your body language may shape who you are | Amy Cuddy",
                "description": "Body language affects how others see us, but it may also change how we see ourselves. Social psychologist Amy Cuddy argues that \"power posing\" -- standing in a posture of confidence, even when we don't feel confident -- can boost feelings of confidence, and might have an impact on our chances for success. (Note: Some of the findings presented in this talk have been referenced in an ongoing debate among social scientists about robustness and reproducibility. Read Amy Cuddy's response here: http://ideas.ted.com/inside-the-debate-about-power-posing-a-q-a-with-amy-cuddy/)\n\nGet TED Talks recommended just for you! Learn more at https://www.ted.com/signup.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED"
            },
            "defaultAudioLanguage": "en"
        },
        "contentDetails": {
            "duration": "PT21M3S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "23055252",
            "likeCount": "386972",
            "favoriteCount": "0",
            "commentCount": "9495"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "cCDw5YdjRsO-WfPLBSO05FCyxFE",
        "id": "c0KYU2j0TM4",
        "snippet": {
            "publishedAt": "2012-03-02T19:03:16Z",
            "channelId": "UCAuUUnT6oDeKwE6v1NGQxug",
            "title": "The power of introverts | Susan Cain",
            "description": "Visit http://TED.com to get our entire library of TED Talks, transcripts, translations, personalized talk recommendations and more.\n\nIn a culture where being social and outgoing are prized above all else, it can be difficult, even shameful, to be an introvert. But, as Susan Cain argues in this passionate talk, introverts bring extraordinary talents and abilities to the world, and should be encouraged and celebrated.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more. You're welcome to link to or embed these videos, forward them to others and share these ideas with people you know. \n\nFollow TED on Twitter: http://twitter.com/TEDTalks\nLike TED on Facebook: http://facebook.com/TED\nSubscribe to our channel: http://youtube.com/TED\n\nTED's videos may be used for non-commercial purposes under a Creative Commons License, Attribution–Non Commercial–No Derivatives (or the CC BY – NC – ND 4.0 International) and in accordance with our TED Talks Usage Policy (https://www.ted.com/about/our-organization/our-policies-terms/ted-talks-usage-policy). For more information on using TED for commercial purposes (e.g. employee learning, in a film or online course), please submit a Media Request at https://media-requests.ted.com",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/c0KYU2j0TM4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/c0KYU2j0TM4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/c0KYU2j0TM4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/c0KYU2j0TM4/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/c0KYU2j0TM4/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "TED",
            "tags": [
                "Susan Cain",
                "culture",
                "psychology",
                "introvert",
                "Quiet",
                "Power of Introverts Book",
                "extravert",
                "TED",
                "TED2012",
                "TEDTalk",
                "TEDTalks",
                "TED Talk",
                "TED Talks"
            ],
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
                "title": "The power of introverts | Susan Cain",
                "description": "Visit http://TED.com to get our entire library of TED Talks, transcripts, translations, personalized talk recommendations and more.\n\nIn a culture where being social and outgoing are prized above all else, it can be difficult, even shameful, to be an introvert. But, as Susan Cain argues in this passionate talk, introverts bring extraordinary talents and abilities to the world, and should be encouraged and celebrated.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more. You're welcome to link to or embed these videos, forward them to others and share these ideas with people you know. \n\nFollow TED on Twitter: http://twitter.com/TEDTalks\nLike TED on Facebook: http://facebook.com/TED\nSubscribe to our channel: http://youtube.com/TED\n\nTED's videos may be used for non-commercial purposes under a Creative Commons License, Attribution–Non Commercial–No Derivatives (or the CC BY – NC – ND 4.0 International) and in accordance with our TED Talks Usage Policy (https://www.ted.com/about/our-organization/our-policies-terms/ted-talks-usage-policy). For more information on using TED for commercial purposes (e.g. employee learning, in a film or online course), please submit a Media Request at https://media-requests.ted.com"
            }
        },
        "contentDetails": {
            "duration": "PT19M5S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "15104908",
            "likeCount": "389731",
            "favoriteCount": "0",
            "commentCount": "18871"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "6DfKLvp6lDBZPmMNvD4g7LWK9u8",
        "id": "eIho2S0ZahI",
        "snippet": {
            "publishedAt": "2014-06-27T15:10:18Z",
            "channelId": "UCAuUUnT6oDeKwE6v1NGQxug",
            "title": "How to speak so that people want to listen | Julian Treasure",
            "description": "Visit http://TED.com to get our entire library of TED Talks, transcripts, translations, personalized talk recommendations and more.\n\nHave you ever felt like you're talking, but nobody is listening? Here's Julian Treasure to help you fix that. As the sound expert demonstrates some useful vocal exercises and shares tips on how to speak with empathy, he offers his vision for a sonorous world of listening and understanding.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more. You're welcome to link to or embed these videos, forward them to others and share these ideas with people you know. \n\nFollow TED on Twitter: http://twitter.com/TEDTalks\nLike TED on Facebook: http://facebook.com/TED\nSubscribe to our channel: http://youtube.com/TED\n\nTED's videos may be used for non-commercial purposes under a Creative Commons License, Attribution–Non Commercial–No Derivatives (or the CC BY – NC – ND 4.0 International) and in accordance with our TED Talks Usage Policy (https://www.ted.com/about/our-organization/our-policies-terms/ted-talks-usage-policy). For more information on using TED for commercial purposes (e.g. employee learning, in a film or online course), please submit a Media Request at https://media-requests.ted.com",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/eIho2S0ZahI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/eIho2S0ZahI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/eIho2S0ZahI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/eIho2S0ZahI/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/eIho2S0ZahI/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "TED",
            "tags": [
                "TEDTalk",
                "TEDTalks",
                "TED Talk",
                "TED Talks",
                "TED",
                "Julian Treasure",
                "culture",
                "sound",
                "speech",
                "TEDGlobal"
            ],
            "categoryId": "26",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
                "title": "How to speak so that people want to listen | Julian Treasure",
                "description": "Visit http://TED.com to get our entire library of TED Talks, transcripts, translations, personalized talk recommendations and more.\n\nHave you ever felt like you're talking, but nobody is listening? Here's Julian Treasure to help you fix that. As the sound expert demonstrates some useful vocal exercises and shares tips on how to speak with empathy, he offers his vision for a sonorous world of listening and understanding.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more. You're welcome to link to or embed these videos, forward them to others and share these ideas with people you know. \n\nFollow TED on Twitter: http://twitter.com/TEDTalks\nLike TED on Facebook: http://facebook.com/TED\nSubscribe to our channel: http://youtube.com/TED\n\nTED's videos may be used for non-commercial purposes under a Creative Commons License, Attribution–Non Commercial–No Derivatives (or the CC BY – NC – ND 4.0 International) and in accordance with our TED Talks Usage Policy (https://www.ted.com/about/our-organization/our-policies-terms/ted-talks-usage-policy). For more information on using TED for commercial purposes (e.g. employee learning, in a film or online course), please submit a Media Request at https://media-requests.ted.com"
            }
        },
        "contentDetails": {
            "duration": "PT9M59S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "37061718",
            "likeCount": "747972",
            "favoriteCount": "0",
            "commentCount": "10213"
        }
    }
]);

  useEffect(() => {
    fetchVideos()
  }, []);

    const fetchVideos = async () => {
        try {
        let response = await axios
            .get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=${KEY}`
            )
            .then((response) => {
            setVideos(response.data.items);
            });
        } catch (error) {
        console.log(error.response.data);
        }
    };



  return (
    <div className="container">
      <div>
        
      </div>
    </div>
  );
};

export default YouTubePage;
