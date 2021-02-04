var {client} = require("../index.js");
module.exports = {
    name:'clearAll',
    description:'Test commande clearAll et supprime tous les fichiers du channel',
    execute(message){
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.messages.fetch().then(function(list){
                message.channel.bulkDelete(list);
                }, function(err){message.channel.send("Error : Problème apparu pour nettoyer le chat")})
        }
    }
};