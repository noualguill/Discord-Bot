var {client} = require("../index.js");
module.exports = {
    name:'ping',
    description:'Test commande ping et renvoie latence',
    execute(message){
        message.channel.send(`🏓 PONG 🏓 \n  La latence de l'API est de ${Math.round(client.ws.ping)}ms`);
    }
};