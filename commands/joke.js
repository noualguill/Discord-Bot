var {client} = require("../index.js");
const fetch = require("node-fetch");
const axios = require("axios");


module.exports = {
    
    name:'joke',
    description:'Test commande joke , renvoie une joke de Chuck Norris de l\'API Chuck Norris',
    async execute(message,args){

        const response = await fetch("http://api.icndb.com/categories");
        const tabCat = await response.json();
    
        if (args[0]==undefined){
            axios.get('https://api.chucknorris.io/jokes/random').then(resp => {
                message.reply(resp.data.value);
            });
        }
        else{
            for (elt in args){
                if (parseInt(args[elt])){
                
                    axios.get(`http://api.icndb.com/jokes/${args[elt]}`).then(resp => {
                    if (resp.data.value.joke==undefined){
                        message.reply(resp.data.value);
                    }
                    else{
                        message.reply(resp.data.value.joke);
                    }
                    });
                }
                else if (tabCat.value.includes(args[elt].toString())  ){
               
                    axios.get(`http://api.icndb.com/jokes/random?limitTo=[${args[elt]}]`).then(resp => {
                        message.reply(resp.data.value.joke);
                    });
                }
                else{
                    axios.get(`http://api.icndb.com/jokes/random?limitTo=[${args[elt]}]`).then(resp => {
                        message.reply(resp.data.value);
                    });
                }
            }
        }

    }
};
