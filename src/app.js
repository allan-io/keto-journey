const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Keto Journey'
    })
})
app.get('/blog', (req, res) => {
    res.render('blog', {
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

app.get('/blog/*', (req, res) => {
    res.render('404', {
        error: 'Blog article not found.'
    })
}
)
app.get('/collections/*', (req, res) => {
    res.render('404', {
        error: 'Collection not found.'
    })
})

app.get('/recipe/*', (req, res) => {
    res.render('404', {
        error: 'Recipe not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        error: 'Page not found.'
    })
})

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})