var {client} = require("../index.js");
const axios = require("axios");
module.exports = {
    name:'jokeCategories',
    description:'Test commande jokeCategories , renvoie les différentes catégories des blagues de l\'API Chuck Norris',
    async execute(message,args){

        axios.get('http://api.icndb.com/categories').then(resp => {
            message.channel.send(`Les différentes catégories de l'API Chuck Norris sont: \n ${(resp.data.value).reduce((acc,elt) =>`${acc}-${elt} \n`, "")} \n`);
        });



    }
};