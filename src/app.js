const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

app.use(express.static(publicDirectoryPath))

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})