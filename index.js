let express = require('express')
let app = express()
const cors = require('cors')
const { google } = require("googleapis");
require('dotenv').config()

app.use(cors())

const apiKey = process.env.APIKEY
const channelID = "UCT3KpZF2igJppXlIrXatDfQ"; // O ID do canal que você deseja obter estatísticas

const youtube = google.youtube({
    version: "v3",
    auth: apiKey
});

app.use(express.static('public'))
app.set('view engine', false)

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/subscriberCount', (req, res) => {
    youtube.channels.list({
        part: "statistics",
        id: channelID
    }).then(response => {
        console.log(response)
        const statistics = response.data.items[0].statistics;
        res.status(200).send({inscritos: statistics.subscriberCount});
    })
    .catch(error => {
        res.status(500).send({ fallBack: 480000 });
    });

})
app.listen(4444)