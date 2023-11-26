const { google } = require("googleapis");

const apiKey = "AIzaSyD42L0oclPoWP6zKtfQiBReCdJBj1nz4cA";
const channelUserName = "DoctorWho"; // O ID do canal que você deseja obter estatísticas

const youtube = google.youtube({
    version: "v3",
    auth: apiKey
});
