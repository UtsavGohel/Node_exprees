// to start server with nav.js we have to write nodemon src/index.js
const express = require('express')
const app = express()
const path = require('path')

const staticPath = path.join(__dirname, "../public")

//to set view engine
app.set('view engine', 'hbs')

app.use(express.static(staticPath))

// template engine route
// app.get("/", (req, res) => {
//     res.render('index', {
//         Tutorial_name: "myTutorial"
//     })
// })

app.get('/', (req, res) => {
    res.send("from express hello")
})
app.get("/utsav", (req, res) => {
    res.end("ya ya")
})
app.listen(3000, () => {
    console.log("listen at 3000 port")
})