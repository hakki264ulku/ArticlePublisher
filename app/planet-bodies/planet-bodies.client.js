const { default: axios } = require("axios");
const config = require("../../config");

// Gets All the Planet Bodies from the Client: https://api.le-systeme-solaire.net/en
async function get() {
    try {
        const response = await axios.get(`${config.solarClientBaseUrl}/bodies`);
        return response.data
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    get
}