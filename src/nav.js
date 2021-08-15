// // to start server with nav.js we have to write nodemon src/nav.js
// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000
// app.get("/", (req, res) => {
//     res.write("<h1>welcome to home page</h1>")
//     res.write("<h1>welcome to again home page</h1>")
//     res.send()
// })
// app.get("/about", (req, res) => {
//     res.status(200).send("welcome to about page")
// })
// app.get("/contact", (req, res) => {
//     res.status(200).send([{
//         id: 1,
//         name: "utsav",
//         tech: "node.js"
//     }, {
//         id: 1,
//         name: "utsav",
//         tech: "node.js"
//     }])
// })
// app.listen(port, () => { console.log(`listen on ${port}`) })