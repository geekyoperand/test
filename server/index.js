const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_DEV !== 'production' //true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler() //part of next config
const mongoose = require('mongoose')

// const db = mongoose.connect('mongodb://localhost:27017/Photos',{ useNewUrlParser: true })

nextApp.prepare().then(() => {
    // express code here
    const app = express()
    app.get("/a", (req, res) => {
        return nextApp.render(req, res, "/a", {});
    });
    app.get("/b", (req, res) => {
        return nextApp.render(req, res, "/b", {});
    });
    app.get('*', (req,res)=> {
        return handle(req,res);
    })
    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`)
    })
})