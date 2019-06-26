const path = require('path')
const express = require('express')

const app = express()

//* Define paths for express config

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../src/templates')

//* Setup handlebars engine and views location

app.set('view engine', 'hbs')
app.set('views', viewsPath)

//* Setup static directory to serve
app.use(express.static(publicDirectoryPath))



app.get('', (req, res) => {
    res.render('index', {
        title:'Weather',
        name : 'alex'

    })
})

app.get('/about', (req, res ) => {
    res.render('about', {
        name:'nak'
    })

})


app.get('/help', (req,res) => {
    res.render('help', {
        help: 'This is my help message'
    })
})


app.get('/weather', (req,res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})