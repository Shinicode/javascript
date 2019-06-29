const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//* Define paths for express config

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../src/templates/views')
const partialsPath = path.join(__dirname, '../src/templates/partials')

//* Setup handlebars engine and views location

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//* Setup static directory to serve
app.use(express.static(publicDirectoryPath))



app.get('', (req, res) => {
    res.render('index', {
        title:'Weather',
        name : 'Shinicode'

    })
})

app.get('/about', (req, res ) => {
    res.render('about', {
        title:'About Me',
        name : 'Shinicode'
    })

})


app.get('/help', (req,res) => {
    res.render('help', {
        title: 'Help',
        name : 'Shinicode'
    })
})


app.get('/weather', (req,res) => {
    res.render({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('/help/*', (req,res) => {
    res.render('404',{
        title:'404',
        name : 'Shinicode',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req,res) => {
    res.render('404', {
        title :'404',
        name: 'Shinicode',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})