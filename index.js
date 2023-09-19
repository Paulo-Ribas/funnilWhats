let express = require('express')
let app = express()

app.use(express.static('public'))
app.set('view engine', false)

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(3333)