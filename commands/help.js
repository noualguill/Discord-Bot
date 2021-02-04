const { TextBasedChannel } = require("discord.js");
const { factory } = require("typescript");
var {client} = require("../index.js");
const {prefix , token} = require('../config.json');
module.exports = {
    
    name:'help',
    description:'Test commande help et renvoie la liste de toutes les commandes',
    execute(message){
        let tabCommand= [`${prefix}help`,`${prefix}ping`,`${prefix}joke `,`${prefix}joke`+" id",`${prefix}joke categories`,`${prefix}jokeCount`,`${prefix}jokeCategories`,`${prefix}clearAll`];
        message.channel.send("Les différentes commandes qu'on peut utiliser sont : \n");
        let stock =tabCommand.reduce((acc,elt) =>` ${acc} ● ${elt} \n`, "")
        message.channel.send(stock);
     
    }
};






