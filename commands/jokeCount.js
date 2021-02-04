var {client} = require("../index.js");
const fetch = require("node-fetch");
const axios = require('axios');
module.exports = {
    name:'jokeCount',
    description:'Test commande jokeCount , renvoie le nombre de blagues sur Chuck Norris de l\'API Chuck Norris',
    async execute(message){

        axios.get('http://api.icndb.com/jokes/count').then(resp => {
            message.channel.send(`Il y a ${resp.data.value} blagues \n`);

        });

    }

    
};



