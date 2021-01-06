const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Keto Journey'
    })
})
app.get('/blog', (req, res) => {
    res.render('index', {
        title: 'Blog'
    })
})
app.get('/collections', (req, res) => {
    res.render('collections', {
        title: 'Collections'
    })
})
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact'
    })
})
app.get('/recipes', (req, res) => {
    res.render('recipes', {
        title: 'Recipes'
    })
})

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})