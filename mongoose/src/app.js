const mongoose = require('mongoose')
    // create connection with mongodv=b in node.js
mongoose.connect("mongodb://localhost:27017/byVsCode", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("succesfull"))
    .catch((err) => { console.log(err) });
/*by this we can create new collection(table) in mongoose we use this command*/


const playlistSchema = new mongoose.Schema({
        name: {
            type: String,
            //here if we want to need value than we add require field
            required: true
        },
        ctype: String,
        author: String,
        active: Boolean,
        date: {
            type: Date,
            default: Date.now
        }
    })
    //create collection name playlist
const Playlist = new mongoose.model('playlist', playlistSchema);


// create document or insert
const craeteDocument = async() => {
        try {
            const reactPlaylist = new Playlist({
                name: "React JS",
                ctype: "Front-end",
                author: "Hemangini",
                active: true
            })
            const NodePlaylist = new Playlist({
                name: "Node JS",
                ctype: "Back-end",
                author: "Utsav",
                active: true
            })
            const mongoosePlaylist = new Playlist({
                name: "mongoose",
                ctype: "Database",
                author: "Hemangini",
                active: true
            })
            const result = await Playlist.insertMany([mongoosePlaylist, NodePlaylist, reactPlaylist])
            console.log(result)

        } catch (err) {
            console.log(err)
        }
    }
    // craeteDocument()
const getDocument = async() => {
    try {
        const result = await Playlist
            .find({
                $or: [{ ctype: "front-end" },
                    { author: "guddi" }
                ]
            }).
        countDocuments()

        // .select({ name: 1 })
        // .limit(1)

        console.log(result)
    } catch (err) {
        console.log(err)
    }
}
getDocument()

//update the documents