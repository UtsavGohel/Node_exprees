const mongoose = require('mongoose')
const validator = require('validator')
    // create connection with mongodv=b in node.js
mongoose.connect("mongodb://localhost:27017/byVsCode", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("succesfull"))
    .catch((err) => { console.log(err) });
/*by this we can create new collection(table) in mongoose we use this command*/


const playlistSchema = new mongoose.Schema({
        name: {
            type: String,
            //here if we want to need value than we add require field
            required: true,
            lowercase: true,
            trim: true,
            minlength: [2, "minimum 2 letter to enter"],
            maxlength: [30, "minimum 30 letter to enter"]
        },
        ctype: String,
        author: String,
        active: Boolean,
        email: {
            type: String,
            require: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email Invalid')
                }
            }
        },
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
        // const reactPlaylist = new Playlist({
        //     name: "React JS",
        //     ctype: "Front-end",
        //     author: "Hemangini",
        //     active: true
        // })
        // const NodePlaylist = new Playlist({
        //     name: "Node JS",
        //     ctype: "Back-end",
        //     author: "Utsav",
        //     active: true
        // })
        const mongoosePlaylist = new Playlist({
            name: "mongoose",
            ctype: "Database",
            author: "Hemangini",
            email: "abc@gmail.com",
            active: true

        })
        const result = await Playlist.insertMany([mongoosePlaylist])
        console.log(result)

    } catch (err) {
        console.log(err)
    }
}
craeteDocument()
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
const updateDocument = async(_id) => {
        try {
            const result = await Playlist.findByIdAndUpdate({ _id }, {
                $set: {
                    name: "Angular 5",
                    author: "Ms.Hemangini Gohel"
                }
            }, {
                useFindAndModify: false
            })
            console.log(result)
        } catch (err) {
            console.log(err)
        }
    }
    // updateDocument("611e4c53a2521120d2724c69")
    // delete the documents

const deleteDocument = async(_id) => {
    try {
        const result = await Playlist.findByIdAndDelete({ _id })
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

// deleteDocument("611cfd703666f543a8a642d9")