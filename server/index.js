const express = require('express')

const app =express()

app.get('/',function (req, res) {
    res.send('<h1>hello word</h1>')
})

app.listen(9093, function() {
    console.log('node app ')
})