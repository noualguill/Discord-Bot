var {client} = require("../index.js");
const {prefix , token} = require('../config.json');
module.exports = {
    name:'prefix',
    description:'Test commande prefix et permet de changer le prefix de la commande',
    execute(message,args){
      if (args[0].length==1){
        var fs = require('fs')
        let someFile="./config.json";
        fs.readFile(someFile, 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }
          var result = data.replace(`${prefix}`,`${args[0]}`);
        
          fs.writeFile(someFile, result, 'utf8', function (err) {
             if (err) return console.log(err);
          });
        });
        message.channel.send(`Le prefix a bien changé par ${args[0]}` );
      }
      else{
        message.channel.send('Le préfixe que vous avez sélectionné est invalide, veuillez saisir un préfixe d\'une taille d\'un caractère ');
      }
        
    }
};









