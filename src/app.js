const express = require('express')
const multer = require('multer')
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.model")


const app = express()
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage()})

// the "image" we are using is the key that is send in form-data format 

module.exports = app;