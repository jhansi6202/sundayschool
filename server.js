const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// ======================
// SONGS
// ======================

const songs = [
    {
        id: 1,
        title: "Jesus Loves Me",

        english:
            "Jesus loves me, this I know,\nFor the Bible tells me so.",

        telugu:
            "యేసు నన్ను ప్రేమించును,\nబైబిల్ నాకు చెప్పును.",

        youtube:
            "https://www.youtube.com/"
    }
];


// ======================
// BIBLE VERSES
// ======================

const verses = [
    {
        id: 1,
        verse:
            "I can do all things through Christ who strengthens me.",

        reference:
            "Philippians 4:13"
    },

    {
        id: 2,
        verse:
            "God is love.",

        reference:
            "1 John 4:8"
    },

    {
        id: 3,
        verse:
            "Trust in the Lord with all your heart.",

        reference:
            "Proverbs 3:5"
    }
];


// ======================
// ACTION DANCE
// ======================

const dances = [
    {
        id: 1,
        title: "Sunday School Action Dance",

        youtube:
            "https://www.youtube.com/"
    }
];


// ======================
// HOME PAGE
// ======================

const home = {
    title: "Welcome to Sunday School!",

    message:
        "Learn, sing, dance and grow in God's love."
};


// ======================
// HOME API
// ======================

app.get("/", (req, res) => {

    res.send("Sunday School Backend is Running!");

});


// ======================
// SONGS API
// ======================

app.get("/api/songs", (req, res) => {

    res.json(songs);

});


// ======================
// VERSES API
// ======================

app.get("/api/verses", (req, res) => {

    res.json(verses);

});


// ======================
// DANCE API
// ======================

app.get("/api/dance", (req, res) => {

    res.json(dances);

});


// ======================
// HOME API
// ======================

app.get("/api/home", (req, res) => {

    res.json(home);

});


// ======================
// START SERVER
// ======================

app.listen(5000, () => {

    console.log(
        "Sunday School Server running on http://localhost:5000"
    );

});