const express = require('express')
const app = express()
const PORT = 7777
const morgan = require('morgan')
const routing = require('./routes/routes')

//Setting NodeJs Environtment
app.set('view engine', 'ejs')
app.use(express.static('/public'))
app.use(morgan('dev'))
app.use('/', routing) // setting route
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(PORT, function(){
    console.log('Server is running in port: ' + PORT)
})

// app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.render('index')
// })