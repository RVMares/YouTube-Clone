import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import VideoMapper from "../../components/VideoMapper/VideoMapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import "./YouTubePage.css"

const YouTubePage = () => {
  const [videos, setVideos] = useState([
    {
        "kind": "youtube#video",
        "etag": "7_8e04_vT3kSk5mpAc3GG68y9Fo",
        "id": "8vmb3ZyFap8",
        "snippet": {
            "publishedAt": "2023-04-30T18:50:12Z",
            "channelId": "UCiYcA0gJzg855iSKMrX3oHg",
            "title": "THE END OF AMANDA [Amanda The Adventurer #3]",
            "description": "WELCOME, back to Amanda The Adventurer! LET'S END THIS.\n\nJoin ► http://bit.ly/1vKSGtU\nTiktok ► https://www.tiktok.com/@notcoryxkenshin\nTwitter ► https://twitter.com/coryxkenshin\nInstagram ► http://instagram.com/coryxkenshin\n\nGame: https://store.steampowered.com/app/2166060/Amanda_the_Adventurer/\n\nMusic:\nhttps://www.youtube.com/user/myuuji\nhttps://incompetech.com/music/royalty-free/music.html\n\nJesus said to love one another and that we should be servants to each other, so I would ask that you all do that in the comment section. Be respectful. We are a community. That means more to me than anything. Thank you.\n\n~CK\n\n#coryxkenshin #amandatheadventurer",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/8vmb3ZyFap8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/8vmb3ZyFap8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/8vmb3ZyFap8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/8vmb3ZyFap8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/8vmb3ZyFap8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "CoryxKenshin",
            "tags": [
                "amanda the adventurer",
                "amanda",
                "the",
                "adventurer",
                "gameplay",
                "game",
                "full",
                "new",
                "full game",
                "ending",
                "bad",
                "playthrough",
                "walkthrough",
                "how to",
                "scary",
                "horror",
                "jumpscare",
                "wooly",
                "coryxkenshin",
                "cory",
                "kenshin",
                "funny",
                "hilarious",
                "moments",
                "reaction",
                "edits",
                "all endings",
                "endings",
                "end",
                "the end",
                "finale",
                "part 3",
                "all tapes"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "THE END OF AMANDA [Amanda The Adventurer #3]",
                "description": "WELCOME, back to Amanda The Adventurer! LET'S END THIS.\n\nJoin ► http://bit.ly/1vKSGtU\nTiktok ► https://www.tiktok.com/@notcoryxkenshin\nTwitter ► https://twitter.com/coryxkenshin\nInstagram ► http://instagram.com/coryxkenshin\n\nGame: https://store.steampowered.com/app/2166060/Amanda_the_Adventurer/\n\nMusic:\nhttps://www.youtube.com/user/myuuji\nhttps://incompetech.com/music/royalty-free/music.html\n\nJesus said to love one another and that we should be servants to each other, so I would ask that you all do that in the comment section. Be respectful. We are a community. That means more to me than anything. Thank you.\n\n~CK\n\n#coryxkenshin #amandatheadventurer"
            },
            "defaultAudioLanguage": "en-US"
        },
        "contentDetails": {
            "duration": "PT35M",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "3614569",
            "likeCount": "293699",
            "favoriteCount": "0",
            "commentCount": "38193"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "kfcmneiWM414Cgishf7k4oEKwSw",
        "id": "ibSB6WeK1HE",
        "snippet": {
            "publishedAt": "2023-04-30T17:30:07Z",
            "channelId": "UCDogdKl7t7NHzQ95aEwkdMw",
            "title": "SIDEMEN VISIT WORLD’S WEIRDEST RESTAURANTS",
            "description": "🍗: Order food NOW at: https://www.eatsides.com/\n🎥: Access exclusive content at: https://www.sideplus.com/\n🍹: XIX Vodka: https://www.xixvodka.com/\n👉🏻: Subscribe to our Reacts Channel: https://www.youtube.com/SidemenReacts 👈🏻\n👕: Sidemen Clothing: http://www.sidemenclothing.com\n👉🏻 Subscribe to our 2nd Channel: https://www.youtube.com/MoreSidemen 👈🏻\n📸: Sidemen Instagram: http://www.instagram.com/Sidemen\n🐤: Sidemen Twitter: http://www.twitter.com/Sidemen\n\n✏️: SUBMIT A #SidemenSunday IDEA HERE\nhttps://forms.gle/JDuGrSzM4F6mdo6D9\n\n-----------------------------------------------------------------------------------------------------------------------\n\n▶️ SIDEMEN ◀️\n\n🔵 JOSH (Zerkaa)\n● http://www.youtube.com/Zerkaa\n● http://www.youtube.com/ZerkaaPlays\n● http://www.instagram.com/Zerkaa\n● http://www.twitter.com/ZerkaaHD\n\n🔴 HARRY (W2S)\n● http://www.youtube.com/W2S\n● http://www.youtube.com/W2SPlays\n● http://www.instagram.com/Wroetoshaw\n● http://www.twitter.com/Wroetoshaw\n\n🔵 VIK (Vikkstar123)\n● http://www.youtube.com/Vikkstar123\n● http://www.youtube.com/Vikkstar123HD\n● http://www.youtube.com/VikkstarPlays\n● http://www.instagram.com/Vikkstagram\n● http://www.twitter.com/Vikkstar123\n\n🔴 JJ (KSI)\n● http://www.youtube.com/KSI\n● http://www.youtube.com/KSIOlajidebtHD\n● http://www.instagram.com/KSI\n● http://www.twitter.com/KSIOlajidebt\n\n🔵 TOBI (Tobjizzle)\n● http://www.youtube.com/TBJZL\n● http://www.youtube.com/Editingaming\n● http://www.instagram.com/Tobjizzle\n● http://www.twitter.com/Tobjizzle\n\n🔴 ETHAN (Behzinga)\n● http://www.youtube.com/Behzinga\n● http://www.youtube.com/Beh2inga\n● http://www.instagram.com/Behzingagram\n● http://www.twitter.com/Behzinga\n\n🔵 SIMON (Miniminter)\n● http://www.youtube.com/Miniminter\n● http://www.youtube.com/MM7Games\n● http://www.instagram.com/Miniminter\n● http://www.twitter.com/Miniminter",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ibSB6WeK1HE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ibSB6WeK1HE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ibSB6WeK1HE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/ibSB6WeK1HE/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/ibSB6WeK1HE/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Sidemen",
            "tags": [
                "sidemen",
                "sidemen sunday",
                "#sidemensunday"
            ],
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "SIDEMEN VISIT WORLD’S WEIRDEST RESTAURANTS",
                "description": "🍗: Order food NOW at: https://www.eatsides.com/\n🎥: Access exclusive content at: https://www.sideplus.com/\n🍹: XIX Vodka: https://www.xixvodka.com/\n👉🏻: Subscribe to our Reacts Channel: https://www.youtube.com/SidemenReacts 👈🏻\n👕: Sidemen Clothing: http://www.sidemenclothing.com\n👉🏻 Subscribe to our 2nd Channel: https://www.youtube.com/MoreSidemen 👈🏻\n📸: Sidemen Instagram: http://www.instagram.com/Sidemen\n🐤: Sidemen Twitter: http://www.twitter.com/Sidemen\n\n✏️: SUBMIT A #SidemenSunday IDEA HERE\nhttps://forms.gle/JDuGrSzM4F6mdo6D9\n\n-----------------------------------------------------------------------------------------------------------------------\n\n▶️ SIDEMEN ◀️\n\n🔵 JOSH (Zerkaa)\n● http://www.youtube.com/Zerkaa\n● http://www.youtube.com/ZerkaaPlays\n● http://www.instagram.com/Zerkaa\n● http://www.twitter.com/ZerkaaHD\n\n🔴 HARRY (W2S)\n● http://www.youtube.com/W2S\n● http://www.youtube.com/W2SPlays\n● http://www.instagram.com/Wroetoshaw\n● http://www.twitter.com/Wroetoshaw\n\n🔵 VIK (Vikkstar123)\n● http://www.youtube.com/Vikkstar123\n● http://www.youtube.com/Vikkstar123HD\n● http://www.youtube.com/VikkstarPlays\n● http://www.instagram.com/Vikkstagram\n● http://www.twitter.com/Vikkstar123\n\n🔴 JJ (KSI)\n● http://www.youtube.com/KSI\n● http://www.youtube.com/KSIOlajidebtHD\n● http://www.instagram.com/KSI\n● http://www.twitter.com/KSIOlajidebt\n\n🔵 TOBI (Tobjizzle)\n● http://www.youtube.com/TBJZL\n● http://www.youtube.com/Editingaming\n● http://www.instagram.com/Tobjizzle\n● http://www.twitter.com/Tobjizzle\n\n🔴 ETHAN (Behzinga)\n● http://www.youtube.com/Behzinga\n● http://www.youtube.com/Beh2inga\n● http://www.instagram.com/Behzingagram\n● http://www.twitter.com/Behzinga\n\n🔵 SIMON (Miniminter)\n● http://www.youtube.com/Miniminter\n● http://www.youtube.com/MM7Games\n● http://www.instagram.com/Miniminter\n● http://www.twitter.com/Miniminter"
            },
            "defaultAudioLanguage": "en"
        },
        "contentDetails": {
            "duration": "PT1H8M22S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "3384349",
            "likeCount": "323223",
            "favoriteCount": "0",
            "commentCount": "6040"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "4LeCbKcFG3Q6URFsNczlLOJUg7w",
        "id": "I8s7ThBcOTU",
        "snippet": {
            "publishedAt": "2023-05-01T01:54:57Z",
            "channelId": "UC7i94bTxxuZBrllSxXHyFxg",
            "title": "Florida Panthers vs. Boston Bruins: First Round, Gm 7 | Full Game Highlights",
            "description": "Check out these highlights from the Florida Panthers' Game 7 win over the 65-win Boston Bruins to advance to the second round of the 2023 Stanley Cup Playoffs.\n\n✔️ Subscribe to ESPN+ https://plus.espn.com/\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️ Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️Subscribe to ESPN FC on YouTube: http://bit.ly/SUBSCRIBEtoESPNFC\n✔️Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️Watch ESPN on YouTube TV: http://es.pn/YouTubeTV\n\n\n#NHL",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/I8s7ThBcOTU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/I8s7ThBcOTU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/I8s7ThBcOTU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/I8s7ThBcOTU/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/I8s7ThBcOTU/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "NHL on ESPN",
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Florida Panthers vs. Boston Bruins: First Round, Gm 7 | Full Game Highlights",
                "description": "Check out these highlights from the Florida Panthers' Game 7 win over the 65-win Boston Bruins to advance to the second round of the 2023 Stanley Cup Playoffs.\n\n✔️ Subscribe to ESPN+ https://plus.espn.com/\n✔️ Get the ESPN App: http://www.espn.com/espn/apps/espn\n✔️ Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔️Subscribe to ESPN FC on YouTube: http://bit.ly/SUBSCRIBEtoESPNFC\n✔️Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔️Watch ESPN on YouTube TV: http://es.pn/YouTubeTV\n\n\n#NHL"
            }
        },
        "contentDetails": {
            "duration": "PT5M9S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "regionRestriction": {
                "allowed": [
                    "AF",
                    "AG",
                    "AI",
                    "AO",
                    "AR",
                    "AS",
                    "AU",
                    "AW",
                    "BB",
                    "BE",
                    "BF",
                    "BI",
                    "BJ",
                    "BL",
                    "BM",
                    "BO",
                    "BR",
                    "BS",
                    "BW",
                    "CD",
                    "CF",
                    "CG",
                    "CI",
                    "CK",
                    "CL",
                    "CM",
                    "CO",
                    "CU",
                    "CV",
                    "CW",
                    "CY",
                    "DJ",
                    "DM",
                    "EC",
                    "ER",
                    "ES",
                    "ET",
                    "FJ",
                    "FM",
                    "GA",
                    "GD",
                    "GF",
                    "GH",
                    "GM",
                    "GN",
                    "GP",
                    "GQ",
                    "GR",
                    "GU",
                    "GW",
                    "GY",
                    "HU",
                    "IT",
                    "JM",
                    "KE",
                    "KI",
                    "KM",
                    "KN",
                    "KY",
                    "LC",
                    "LR",
                    "LS",
                    "MF",
                    "MG",
                    "MH",
                    "ML",
                    "MP",
                    "MQ",
                    "MR",
                    "MS",
                    "MT",
                    "MU",
                    "MW",
                    "MZ",
                    "NA",
                    "NC",
                    "NE",
                    "NG",
                    "NL",
                    "NR",
                    "NZ",
                    "PE",
                    "PF",
                    "PG",
                    "PR",
                    "PW",
                    "PY",
                    "RE",
                    "RO",
                    "RW",
                    "SB",
                    "SC",
                    "SD",
                    "SH",
                    "SL",
                    "SM",
                    "SN",
                    "SO",
                    "SR",
                    "SS",
                    "ST",
                    "TC",
                    "TD",
                    "TG",
                    "TK",
                    "TO",
                    "TR",
                    "TT",
                    "TV",
                    "TZ",
                    "UG",
                    "US",
                    "UY",
                    "VA",
                    "VC",
                    "VE",
                    "VG",
                    "VI",
                    "VU",
                    "WS",
                    "YT",
                    "ZA",
                    "ZM",
                    "ZW"
                ]
            },
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "114700",
            "likeCount": "1105",
            "favoriteCount": "0",
            "commentCount": "1015"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "Tw7yFnBWyyZrck1fUELyZnHvceU",
        "id": "b2s-_2AiHW0",
        "snippet": {
            "publishedAt": "2023-04-30T23:28:07Z",
            "channelId": "UC_k0qgMNIW2VmTQKjFsbXDw",
            "title": "FlightReacts To #6 WARRIORS at #3 KINGS | FULL GAME 7 HIGHLIGHTS | April 30, 2023!",
            "description": "Thanks for Tuning In!! \n\nLets Get 5 Million Together!\n\nDaily Livestream\nhttps://www.twitch.tv/flight23white\n\nFollow my  instagram https://www.instagram.com/Flight23White_\n\nFOLLOW ME ON TWITTER\nhttps://twitter.com/Flight23White",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/b2s-_2AiHW0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/b2s-_2AiHW0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/b2s-_2AiHW0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/b2s-_2AiHW0/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/b2s-_2AiHW0/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "FlightReacts",
            "tags": [
                "Reactions",
                "Family",
                "vlog",
                "life",
                "NBA",
                "sports",
                "Friends",
                "fashion",
                "friendly",
                "nice",
                "Music",
                "Rap",
                "Hip Hop"
            ],
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "FlightReacts To #6 WARRIORS at #3 KINGS | FULL GAME 7 HIGHLIGHTS | April 30, 2023!",
                "description": "Thanks for Tuning In!! \n\nLets Get 5 Million Together!\n\nDaily Livestream\nhttps://www.twitch.tv/flight23white\n\nFollow my  instagram https://www.instagram.com/Flight23White_\n\nFOLLOW ME ON TWITTER\nhttps://twitter.com/Flight23White"
            },
            "defaultAudioLanguage": "zxx"
        },
        "contentDetails": {
            "duration": "PT33M32S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "regionRestriction": {
                "blocked": [
                    "CN",
                    "HK",
                    "MO",
                    "TW"
                ]
            },
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "382455",
            "likeCount": "23736",
            "favoriteCount": "0",
            "commentCount": "1338"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "3VrTpqsKgLKWGurLFuiliZOhf-E",
        "id": "YQfoTn3Kgfg",
        "snippet": {
            "publishedAt": "2023-04-30T16:00:32Z",
            "channelId": "UCsEgeyBfOnGGBpjIvkDJbWg",
            "title": "Fighting Minecraft's Most Difficult Bosses",
            "description": "Today we attempt to fight Minecraft's most difficult bosses based on a game called Elden ring\nIf YOU want to play FUTURE mods   https://discord.gg/socks\n\nHuge shoutout to the entire team for making this video possible\n\nTwitter  → https://bit.ly/2MrebAu\nReddit → https://bit.ly/3apoz3C\nDiscord  → https://bit.ly/3aoc08U\nInsta  →  https://bit.ly/2MRg4WP\nIf YOU want to play FUTURE mods   https://discord.gg/socks\n\nIf you wanna play and support elden ring https://store.steampowered.com/app/1245620/ELDEN_RING/\n\nFriends in the video\n@TbhHonest \n@BlazaPlays \n@allyvt",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/YQfoTn3Kgfg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/YQfoTn3Kgfg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/YQfoTn3Kgfg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/YQfoTn3Kgfg/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/YQfoTn3Kgfg/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Socksfor1",
            "tags": [
                "Socksfor1",
                "minecraft",
                "minecraft bosses",
                "minecraft mods",
                "minecraft boss fight",
                "minecraft mod",
                "minecraft boss",
                "minecraft mobs",
                "minecraft animation",
                "minecraft but",
                "minecraft survival",
                "minecraft boss mod",
                "best minecraft mods",
                "minecraft house",
                "3d minecraft",
                "minecraft challenge",
                "minecraft art",
                "minecraft build",
                "minecraft bosses guide",
                "minecraft gameplay",
                "minecraft modded bosses",
                "socksfor1 minecraft",
                "socksfor1 mods",
                "socksfor1 mod",
                "socksfor1 largest modpack",
                "minecraft update"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Fighting Minecraft's Most Difficult Bosses",
                "description": "Today we attempt to fight Minecraft's most difficult bosses based on a game called Elden ring\nIf YOU want to play FUTURE mods   https://discord.gg/socks\n\nHuge shoutout to the entire team for making this video possible\n\nTwitter  → https://bit.ly/2MrebAu\nReddit → https://bit.ly/3apoz3C\nDiscord  → https://bit.ly/3aoc08U\nInsta  →  https://bit.ly/2MRg4WP\nIf YOU want to play FUTURE mods   https://discord.gg/socks\n\nIf you wanna play and support elden ring https://store.steampowered.com/app/1245620/ELDEN_RING/\n\nFriends in the video\n@TbhHonest \n@BlazaPlays \n@allyvt"
            },
            "defaultAudioLanguage": "en"
        },
        "contentDetails": {
            "duration": "PT39M35S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "1055423",
            "likeCount": "36152",
            "favoriteCount": "0",
            "commentCount": "4329"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "NJjuLaOwHrT5tp-QnO-zLOxVoak",
        "id": "TsXLlw8ud-8",
        "snippet": {
            "publishedAt": "2023-04-30T19:10:15Z",
            "channelId": "UCqZQlzSHbVJrwrn5XvzrzcA",
            "title": "Liverpool v. Tottenham Hotspur | PREMIER LEAGUE HIGHLIGHTS | 4/30/2023 | NBC Sports",
            "description": "Diogo Jota's stoppage-time strike gave Liverpool a 4-3 win over Tottenham after Spurs overturned a 3-0 deficit at Anfield in an incredible contest. #NBCSports #PremierLeague #Liverpool #Tottenham\n» Subscribe to NBC Sports: https://www.youtube.com/nbcsports?sub_confirmation=1\n» Watch Live Sports on NBCSports.com: http://www.nbcsports.com/live\n» Get more Premier League news on NBC Sports: https://nbcsports.com/soccer/premier-league\n\nWant more Premier League? Check out Peacock Premium: https://peacocktv.com/premierleague\n\nNBC Sports Group serves sports fans 24/7 with premier live events, insightful studio shows, and compelling original programming. NBC Sports is an established leader in the sports media landscape with an unparalleled collection of sports properties that include the Olympics, NFL, Premier League, NASCAR, PGA TOUR, the Kentucky Derby, Tour de France, French Open, IndyCar and many more.\n\nSubscribe to our channel for the latest sporting news and highlights!\n\nThe Premier League across NBC Sports Group launched in 2013 with their biggest and broadest programming commitment to-date in the United States. With live multi-platform coverage of all 380 games, analysis from best-in-class talent and extensive surrounding coverage all week long, NBC Sports Group has become the ultimate destination for new and existing Premier League fans.\n\nThe Premier League maintains strong and consistent reach across NBC, USA Network, CNBC, and NBC Sports Group’s live streaming products, led by the biggest stars and most prestigious teams in the world.\n\nVisit NBC Sports: https://www.nbcsports.com\nFind NBC Sports on Facebook: https://www.facebook.com/NBCSports\nFollow NBC Sports on Twitter: https://twitter.com/nbcsports\nFollow NBC Sports on Instagram: https://www.instagram.com/nbcsports/\n\nhttps://www.nbcsports.com/nfl/sunday-night-football\nhttps://nbcsports.com/motors/nascar\nhttps://nbcsports.com/soccer/premier-league\n\nLiverpool v. Tottenham Hotspur | PREMIER LEAGUE HIGHLIGHTS | 4/30/2023 | NBC Sports\nhttps://www.youtube.com/nbcsports",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/TsXLlw8ud-8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/TsXLlw8ud-8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/TsXLlw8ud-8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/TsXLlw8ud-8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/TsXLlw8ud-8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "NBC Sports",
            "tags": [
                "nbc sports",
                "nbc",
                "premier",
                "league",
                "premier league",
                "premier league highlights",
                "english premier league",
                "epl",
                "premier league goals",
                "premier league soccer",
                "premier league live",
                "english premier league live",
                "english premier league today",
                "premier league 2022/23",
                "liverpool vs tottenham",
                "liverpool highlights",
                "liverpool",
                "tottenham vs liverpool",
                "tottenham highlights",
                "tottenham",
                "diogo jota goal",
                "highlight clips",
                "diogo jota",
                "spurs",
                "anfield",
                "liverpool vs tottenham hotspur",
                "tottenham hotspur"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Liverpool v. Tottenham Hotspur | PREMIER LEAGUE HIGHLIGHTS | 4/30/2023 | NBC Sports",
                "description": "Diogo Jota's stoppage-time strike gave Liverpool a 4-3 win over Tottenham after Spurs overturned a 3-0 deficit at Anfield in an incredible contest. #NBCSports #PremierLeague #Liverpool #Tottenham\n» Subscribe to NBC Sports: https://www.youtube.com/nbcsports?sub_confirmation=1\n» Watch Live Sports on NBCSports.com: http://www.nbcsports.com/live\n» Get more Premier League news on NBC Sports: https://nbcsports.com/soccer/premier-league\n\nWant more Premier League? Check out Peacock Premium: https://peacocktv.com/premierleague\n\nNBC Sports Group serves sports fans 24/7 with premier live events, insightful studio shows, and compelling original programming. NBC Sports is an established leader in the sports media landscape with an unparalleled collection of sports properties that include the Olympics, NFL, Premier League, NASCAR, PGA TOUR, the Kentucky Derby, Tour de France, French Open, IndyCar and many more.\n\nSubscribe to our channel for the latest sporting news and highlights!\n\nThe Premier League across NBC Sports Group launched in 2013 with their biggest and broadest programming commitment to-date in the United States. With live multi-platform coverage of all 380 games, analysis from best-in-class talent and extensive surrounding coverage all week long, NBC Sports Group has become the ultimate destination for new and existing Premier League fans.\n\nThe Premier League maintains strong and consistent reach across NBC, USA Network, CNBC, and NBC Sports Group’s live streaming products, led by the biggest stars and most prestigious teams in the world.\n\nVisit NBC Sports: https://www.nbcsports.com\nFind NBC Sports on Facebook: https://www.facebook.com/NBCSports\nFollow NBC Sports on Twitter: https://twitter.com/nbcsports\nFollow NBC Sports on Instagram: https://www.instagram.com/nbcsports/\n\nhttps://www.nbcsports.com/nfl/sunday-night-football\nhttps://nbcsports.com/motors/nascar\nhttps://nbcsports.com/soccer/premier-league\n\nLiverpool v. Tottenham Hotspur | PREMIER LEAGUE HIGHLIGHTS | 4/30/2023 | NBC Sports\nhttps://www.youtube.com/nbcsports"
            },
            "defaultAudioLanguage": "en"
        },
        "contentDetails": {
            "duration": "PT15M32S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "regionRestriction": {
                "allowed": [
                    "GU",
                    "MP",
                    "PR",
                    "US",
                    "VI"
                ]
            },
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "962474",
            "likeCount": "13624",
            "favoriteCount": "0",
            "commentCount": "1558"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "YRbHkgxaR9QwZTHFcFmJ9kNplFY",
        "id": "i6mXdRzqKK4",
        "snippet": {
            "publishedAt": "2023-04-30T19:00:16Z",
            "channelId": "UChFur_NwVSbUozOcF_F2kMg",
            "title": "Hermitcraft 9: Episode 13 - IT'S BIGGER",
            "description": "Go to https://expressvpn.com/Mumbo and find out how you can get 3\nmonths free! And a big thank you to ExpressVPN for sponsoring this video!\n\nIn this Hermitcraft SMP episode, Mumbo does some serious building on the Mumbo Jumbo Hermitcraft mega base. This giant Minecraft build will be filled with massive Minecraft Industrial farms, huge Minecraft storage systems and complicated redstone redstone contraptions. All on the Hermitcraft SMP server. \n\nFilming channel: https://www.youtube.com/user/ThatMumboJumbo2\nInstagram: https://www.instagram.com/officialmumbo/\nTwitter: https://twitter.com/ThatMumboJumbo",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/i6mXdRzqKK4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/i6mXdRzqKK4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/i6mXdRzqKK4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/i6mXdRzqKK4/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/i6mXdRzqKK4/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Mumbo Jumbo",
            "tags": [
                "ideas",
                "creative",
                "build",
                "survival",
                "tutorial",
                "How to",
                "MumboJumbo",
                "ThatMumboJumbo",
                "Minecraft",
                "Building",
                "Mumbo",
                "Redstone",
                "Technical",
                "Piston",
                "1.9",
                "1.8",
                "1.10",
                "1.11",
                "Gaming",
                "Game",
                "spotlight",
                "showcase",
                "challenge",
                "command",
                "mini-game",
                "gameplay",
                "playthrough",
                "Let's Play",
                "No Swearing",
                "Family Friendly",
                "mc",
                "mcpe",
                "vanilla",
                "Xbox",
                "360",
                "PS4",
                "PE",
                "pocket edition",
                "mobile"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Hermitcraft 9: Episode 13 - IT'S BIGGER",
                "description": "Go to https://expressvpn.com/Mumbo and find out how you can get 3\nmonths free! And a big thank you to ExpressVPN for sponsoring this video!\n\nIn this Hermitcraft SMP episode, Mumbo does some serious building on the Mumbo Jumbo Hermitcraft mega base. This giant Minecraft build will be filled with massive Minecraft Industrial farms, huge Minecraft storage systems and complicated redstone redstone contraptions. All on the Hermitcraft SMP server. \n\nFilming channel: https://www.youtube.com/user/ThatMumboJumbo2\nInstagram: https://www.instagram.com/officialmumbo/\nTwitter: https://twitter.com/ThatMumboJumbo"
            },
            "defaultAudioLanguage": "en"
        },
        "contentDetails": {
            "duration": "PT21M2S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "774358",
            "likeCount": "55591",
            "favoriteCount": "0",
            "commentCount": "2759"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "tom3AoT41UVFXSfEqNIai7lV_DU",
        "id": "nJIrvbkr4pk",
        "snippet": {
            "publishedAt": "2023-04-30T13:17:03Z",
            "channelId": "UCB_qr75-ydFVKSF9Dmo6izg",
            "title": "Race Highlights | 2023 Azerbaijan Grand Prix",
            "description": "It was all GO on the streets of Baku! Enjoy all the best bits from Azerbaijan.\n\nFor more F1® videos, visit https://www.Formula1.com\n\nFollow F1®:\nhttps://www.instagram.com/F1\nhttps://www.facebook.com/Formula1/\nhttps://www.twitter.com/F1\nhttps://www.twitch.tv/formula1\nhttps://www.tiktok.com/@f1\n\n#F1 #AzerbaijanGP",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/nJIrvbkr4pk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/nJIrvbkr4pk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/nJIrvbkr4pk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/nJIrvbkr4pk/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/nJIrvbkr4pk/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "FORMULA 1",
            "tags": [
                "F1",
                "Formula One",
                "Formula 1",
                "Sports",
                "Sport",
                "Action",
                "GP",
                "Grand Prix",
                "Auto Racing",
                "Motor Racing"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Race Highlights | 2023 Azerbaijan Grand Prix",
                "description": "It was all GO on the streets of Baku! Enjoy all the best bits from Azerbaijan.\n\nFor more F1® videos, visit https://www.Formula1.com\n\nFollow F1®:\nhttps://www.instagram.com/F1\nhttps://www.facebook.com/Formula1/\nhttps://www.twitter.com/F1\nhttps://www.twitch.tv/formula1\nhttps://www.tiktok.com/@f1\n\n#F1 #AzerbaijanGP"
            },
            "defaultAudioLanguage": "en"
        },
        "contentDetails": {
            "duration": "PT7M21S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "regionRestriction": {
                "blocked": [
                    "BY",
                    "RU"
                ]
            },
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "5060888",
            "likeCount": "95793",
            "favoriteCount": "0",
            "commentCount": "4560"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "F9l83GK10WQNeFGxzsF-kdAFbLc",
        "id": "7kuT6zm5G-c",
        "snippet": {
            "publishedAt": "2023-04-30T13:59:00Z",
            "channelId": "UCVT1tPkR-fUVlO652EcO3ow",
            "title": "Michael J. Fox on Parkinson's, and maintaining optimism",
            "description": "One of the most famous actors to burst onto the scene in the 1980s, Michael J. Fox has become almost as famous for his very public fight against Parkinson's disease. With \"Sunday Morning\" anchor Jane Pauley, the \"Family Ties\" and \"Back to the Future\" star looks back on superstardom, raising $1.5 billion for Parkinson's research, and a new documentary tracing his life, called \"Still.\"\n@michaeljfoxfoundation #parkinsonsdisease \n\n\"CBS Sunday Morning\" features stories on the arts, music, nature, entertainment, sports, history, science and Americana, and highlights unique human accomplishments and achievements. Check local listings for CBS Sunday Morning broadcast times.\n\nSubscribe to the \"CBS Sunday Morning\" YouTube channel: http://bit.ly/20gXwJT\nGet more of \"CBS Sunday Morning\": http://cbsn.ws/1PlMmAz\nFollow \"CBS Sunday Morning\" on Instagram: http://bit.ly/23XunIh\nLike \"CBS Sunday Morning\" on Facebook: https://bit.ly/3sRgLPG\nFollow \"CBS Sunday Morning\" on Twitter: http://bit.ly/1RquoQb\nSubscribe to our newsletter: http://cbsn.ws/1RqHw7T\nDownload the CBS News app: http://cbsn.ws/1Xb1WC8\nTry Paramount+ free: https://bit.ly/2OiW1kZ\n\nFor video licensing inquiries, contact: licensing@veritone.com",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/7kuT6zm5G-c/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/7kuT6zm5G-c/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/7kuT6zm5G-c/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/7kuT6zm5G-c/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/7kuT6zm5G-c/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "CBS Sunday Morning",
            "tags": [
                "CBS Sunday Morning",
                "CBS News",
                "news",
                "michael j fox",
                "parkinsons",
                "actor",
                "family ties",
                "back to the future",
                "still"
            ],
            "categoryId": "25",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Michael J. Fox on Parkinson's, and maintaining optimism",
                "description": "One of the most famous actors to burst onto the scene in the 1980s, Michael J. Fox has become almost as famous for his very public fight against Parkinson's disease. With \"Sunday Morning\" anchor Jane Pauley, the \"Family Ties\" and \"Back to the Future\" star looks back on superstardom, raising $1.5 billion for Parkinson's research, and a new documentary tracing his life, called \"Still.\"\n@michaeljfoxfoundation #parkinsonsdisease \n\n\"CBS Sunday Morning\" features stories on the arts, music, nature, entertainment, sports, history, science and Americana, and highlights unique human accomplishments and achievements. Check local listings for CBS Sunday Morning broadcast times.\n\nSubscribe to the \"CBS Sunday Morning\" YouTube channel: http://bit.ly/20gXwJT\nGet more of \"CBS Sunday Morning\": http://cbsn.ws/1PlMmAz\nFollow \"CBS Sunday Morning\" on Instagram: http://bit.ly/23XunIh\nLike \"CBS Sunday Morning\" on Facebook: https://bit.ly/3sRgLPG\nFollow \"CBS Sunday Morning\" on Twitter: http://bit.ly/1RquoQb\nSubscribe to our newsletter: http://cbsn.ws/1RqHw7T\nDownload the CBS News app: http://cbsn.ws/1Xb1WC8\nTry Paramount+ free: https://bit.ly/2OiW1kZ\n\nFor video licensing inquiries, contact: licensing@veritone.com"
            },
            "defaultAudioLanguage": "en"
        },
        "contentDetails": {
            "duration": "PT8M4S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "regionRestriction": {
                "blocked": [
                    "AU",
                    "CA"
                ]
            },
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "405229",
            "likeCount": "7617",
            "favoriteCount": "0",
            "commentCount": "1080"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "51L11S1aOxRDQJ9Jx5rt9IesVFQ",
        "id": "u1ug0TDiN24",
        "snippet": {
            "publishedAt": "2023-04-30T15:00:03Z",
            "channelId": "UC4laAHbk8VSgmvB47tsd2XQ",
            "title": "Not The Video We Wanted to Make",
            "description": "We're back at our cabin in the woods but we receive some unexpected news. We love you Lectric! Thanks for keeping us moving (even through treatment) and for sponsoring this video. Check them out here: https://bit.ly/lectricxeamonandbec  \n\nWe can hardly believe the end of our van life era coincided with the birth of our new baby https://drinkhabit.com/ 🍵 💬 Our 7 tea blends are now available to enjoy over a good chat with yourself, your bestie, your grandma, your lover. Shop now https://drinkhabit.com/ ☀️\n\nWelcome back to our cabin in the woods. We haven't been here since Bec finished treatment for breast cancer and there are so many difficult memories in these spaces. Then, to receive a call back for another mammogram and biopsy has sent us into a bit of a spiral. We are trying to remain positive and we appreciate each and every one of you! We really debated whether or not to post this episode but you all have been a part of our breast cancer journey from day 1. It feels like you should definitely be a part of the story as it continues ❤️🥰☀️\n\n0:14 the video we DID want to make\n1:33 dump run 🏃‍♀️ \n3:40 our worst contractors ever!\n6:14 call from Bec's doctors\n9:47 ice cold polar plunge 💧 \n11:47 cabin morning routine \n16:15 family bike ride \n18:47 this was so dangerous 😬 \n19:53 our greenhouse update\n22:37 iced strawberry matcha latte\n25:24 staying strong 💪 \n27:50 anxiety about cancer recurrence\n29:30 Habit photography sesh\n30:52 doctors call",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/u1ug0TDiN24/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/u1ug0TDiN24/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/u1ug0TDiN24/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/u1ug0TDiN24/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/u1ug0TDiN24/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Eamon & Bec",
            "tags": [
                "eamon and bec",
                "emon and bec",
                "bec and eamon",
                "cabin",
                "cabin in the woods",
                "eamon and bec cabin",
                "canada",
                "cabin in canada",
                "cabin life",
                "from van life to cabin life",
                "eamon and bec tea",
                "drinkhabit.com",
                "drink habit tea eamon and bec",
                "eamon and bec cancer",
                "breast cancer",
                "eamon and bec breast",
                "bec breast cancer",
                "morning routine",
                "greenhouse"
            ],
            "categoryId": "19",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Not The Video We Wanted to Make",
                "description": "We're back at our cabin in the woods but we receive some unexpected news. We love you Lectric! Thanks for keeping us moving (even through treatment) and for sponsoring this video. Check them out here: https://bit.ly/lectricxeamonandbec  \n\nWe can hardly believe the end of our van life era coincided with the birth of our new baby https://drinkhabit.com/ 🍵 💬 Our 7 tea blends are now available to enjoy over a good chat with yourself, your bestie, your grandma, your lover. Shop now https://drinkhabit.com/ ☀️\n\nWelcome back to our cabin in the woods. We haven't been here since Bec finished treatment for breast cancer and there are so many difficult memories in these spaces. Then, to receive a call back for another mammogram and biopsy has sent us into a bit of a spiral. We are trying to remain positive and we appreciate each and every one of you! We really debated whether or not to post this episode but you all have been a part of our breast cancer journey from day 1. It feels like you should definitely be a part of the story as it continues ❤️🥰☀️\n\n0:14 the video we DID want to make\n1:33 dump run 🏃‍♀️ \n3:40 our worst contractors ever!\n6:14 call from Bec's doctors\n9:47 ice cold polar plunge 💧 \n11:47 cabin morning routine \n16:15 family bike ride \n18:47 this was so dangerous 😬 \n19:53 our greenhouse update\n22:37 iced strawberry matcha latte\n25:24 staying strong 💪 \n27:50 anxiety about cancer recurrence\n29:30 Habit photography sesh\n30:52 doctors call"
            },
            "defaultAudioLanguage": "en-CA"
        },
        "contentDetails": {
            "duration": "PT31M58S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "662939",
            "likeCount": "35680",
            "favoriteCount": "0",
            "commentCount": "3295"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "QjmQMCnG59grqflrQ4nai1q92KY",
        "id": "SVZK3eUPzJg",
        "snippet": {
            "publishedAt": "2023-04-30T18:14:05Z",
            "channelId": "UCVe_RrR9AMeY6Z8ixOv5gtw",
            "title": "My Dream Office Makeover Reveal!… THIS TOOK 2 YEARS!!!",
            "description": "Watch my latest podcast! https://youtu.be/JSt-i5iCo8k\n\nWatch our Bedroom Makeover! https://youtu.be/Wk1odwFt0f4\n\nWork with Colleen at Cabinetry By Cales: colleenjob@cabinetrybycales.com \n\nShoutout to Arvin Olano! https://www.youtube.com/@ArvinOlano\nWatch Shane's new video!! https://youtu.be/sNH--374MzU\nWatch Shane's new podcast! https://youtu.be/oBBlUeY-Q-0\nFollow Shane! https://www.instagram.com/shanedawson/?hl=en \nSubscribe to Morgan! https://www.youtube.com/@morgansvlogs\nFollow my mom! https://www.instagram.com/vickiadams26/?hl=en\nSubscribe to Lizze: https://www.youtube.com/c/ElizabethGordon\nFollow Lizze https://www.instagram.com/lizze.gordon/?hl=en \n\nFollow me on social media\nInstagram https://www.instagram.com/rylandadams/\ntwitter https://twitter.com/Ryland_Adams \n\nCheck out my Mom's amazon store! https://www.amazon.com/shop/influencer-e17144ae \n\nHope you have a great day!",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/SVZK3eUPzJg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/SVZK3eUPzJg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/SVZK3eUPzJg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/SVZK3eUPzJg/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/SVZK3eUPzJg/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Ryland vlogs",
            "tags": [
                "Ryland Adams",
                "Shane Dawson",
                "Room Makeover",
                "Reveal",
                "Design",
                "Home",
                "Vlogs",
                "Comedy",
                "Haul",
                "Makeover"
            ],
            "categoryId": "22",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "My Dream Office Makeover Reveal!… THIS TOOK 2 YEARS!!!",
                "description": "Watch my latest podcast! https://youtu.be/JSt-i5iCo8k\n\nWatch our Bedroom Makeover! https://youtu.be/Wk1odwFt0f4\n\nWork with Colleen at Cabinetry By Cales: colleenjob@cabinetrybycales.com \n\nShoutout to Arvin Olano! https://www.youtube.com/@ArvinOlano\nWatch Shane's new video!! https://youtu.be/sNH--374MzU\nWatch Shane's new podcast! https://youtu.be/oBBlUeY-Q-0\nFollow Shane! https://www.instagram.com/shanedawson/?hl=en \nSubscribe to Morgan! https://www.youtube.com/@morgansvlogs\nFollow my mom! https://www.instagram.com/vickiadams26/?hl=en\nSubscribe to Lizze: https://www.youtube.com/c/ElizabethGordon\nFollow Lizze https://www.instagram.com/lizze.gordon/?hl=en \n\nFollow me on social media\nInstagram https://www.instagram.com/rylandadams/\ntwitter https://twitter.com/Ryland_Adams \n\nCheck out my Mom's amazon store! https://www.amazon.com/shop/influencer-e17144ae \n\nHope you have a great day!"
            }
        },
        "contentDetails": {
            "duration": "PT26M25S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "false",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "245273",
            "likeCount": "15653",
            "favoriteCount": "0",
            "commentCount": "1068"
        }
    },
    {
        "kind": "youtube#video",
        "etag": "o1kYzPQl4aLMg-mZPFCaudYaa3U",
        "id": "HtiJkMsNtHg",
        "snippet": {
            "publishedAt": "2023-05-01T04:00:10Z",
            "channelId": "UCiS882YPwZt1NfaM0gR0D9Q",
            "title": "Character Demo - \"Baizhu: Curing the Root Cause\" | Genshin Impact",
            "description": "A physician's prescription must adapt to all facets of an individual's circumstances.\nTo protect life most precious, one must first be able to identify truth, falsehood, and signs.\n\nDownload FREE: https://hoyo.link/d0vPBBAd\n\n#GenshinImpact #HoYoverse\n\n↓ Follow us for the latest news ↓\nHoYoLAB: https://hoyo.link/34115CA6\nOfficial Website: https://hoyo.link/b7SCBOAd\nOfficial Community: https://hoyo.link/52uYBBAd\nFacebook: https://hoyo.link/77SCB0Ad\nTwitter: https://hoyo.link/7bSCBxAd\nTwitch: https://hoyo.link/4bSCBFAd\nInstagram: https://hoyo.link/a6SCBEAd\nReddit: https://hoyo.link/c1SCBIAd",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/HtiJkMsNtHg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/HtiJkMsNtHg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/HtiJkMsNtHg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/HtiJkMsNtHg/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/HtiJkMsNtHg/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "Genshin Impact",
            "tags": [
                "Amber",
                "amber vtuber",
                "genshi",
                "genshi game",
                "genshi impact",
                "genshi video",
                "genshin",
                "genshin game",
                "genshin impact",
                "genshin impact 2020",
                "genshin impact game",
                "genshin impact good",
                "genshin impact graphics",
                "genshin impact introduction",
                "genshin impact manga",
                "genshin impact wiki",
                "geshin",
                "geshin game",
                "Teyvat",
                "yuanshen game",
                "miHoYo China",
                "miHoYo Japan",
                "adventure story",
                "open world game",
                "anime style",
                "MMORPG",
                "anime games",
                "mobile game",
                "MMO PlayStation",
                "yt:cc=on"
            ],
            "categoryId": "20",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Character Demo - \"Baizhu: Curing the Root Cause\" | Genshin Impact",
                "description": "A physician's prescription must adapt to all facets of an individual's circumstances.\nTo protect life most precious, one must first be able to identify truth, falsehood, and signs.\n\nDownload FREE: https://hoyo.link/d0vPBBAd\n\n#GenshinImpact #HoYoverse\n\n↓ Follow us for the latest news ↓\nHoYoLAB: https://hoyo.link/34115CA6\nOfficial Website: https://hoyo.link/b7SCBOAd\nOfficial Community: https://hoyo.link/52uYBBAd\nFacebook: https://hoyo.link/77SCB0Ad\nTwitter: https://hoyo.link/7bSCBxAd\nTwitch: https://hoyo.link/4bSCBFAd\nInstagram: https://hoyo.link/a6SCBEAd\nReddit: https://hoyo.link/c1SCBIAd"
            },
            "defaultAudioLanguage": "en-US"
        },
        "contentDetails": {
            "duration": "PT3M1S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": false,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "710044",
            "likeCount": "85219",
            "favoriteCount": "0",
            "commentCount": "3889"
        }
    }
]);

  // useEffect(() => {
  //   fetchVideos()
  // }, []);

  //   const fetchVideos = async () => {
  //       try {
  //         let response = await axios
  //           .get(
  //           `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=${KEY}`
  //           )
  //           .then((response) => {
  //           setVideos(response.data.items);
  //           });
  //         console.log(response)
  //       } catch (error) {
  //       console.log(error.response.data);
  //       }
  //   };

  return (
    <div className="container">
      <h1>Popular Videos <FontAwesomeIcon icon={faVideo} style={{color: "lightseagreen",}} /></h1>
      <div>
        <VideoMapper videoArray={videos}/>
      </div>
    </div>
  );
};

export default YouTubePage;
