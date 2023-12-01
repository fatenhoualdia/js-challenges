import surahs from "./quran.json" assert {type: 'json'}


/* TODO: format the index property in every object in the surahs array
exp: so instead of {index: "001"} => {index: 1}
like this:

    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 7,
        "title": "Al-Fatiha",
        "titleAr": "الفاتحة",
        "index": 1,
        "pages": "1",
        "juz": [
            {
                "index": "01",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_7"
                }
            }
        ]
    }


    Note: do this to all the objects in the array
*/

function formatIndex () {
 // this function should return a new array
}

/* 
TODO: add the surah_link to every object in the surahs array

the link should be formated like this : 
https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_{index}.json

you should replace the index in the {} with the correspond surah's index
exp:
    {
        "place": "Mecca",
        "type": "Makkiyah",
        "count": 7,
        "title": "Al-Fatiha",
        "titleAr": "الفاتحة",
        "index": 1,
        "surah_link": "https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_1.json",
        "pages": "1",
        "juz": [
            {
                "index": "01",
                "verse": {
                    "start": "verse_1",
                    "end": "verse_7"
                }
            }
        ]
    }
    Note: do this to all the objects in the array
*/

function addSurahUrl () {
    // this function should return a new array
}