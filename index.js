const fs = require('fs');
const Discord = require('discord.js');
const {token,prefix} = require('./config.json');
const fetch = require("node-fetch");
const commandFiles = fs.readdirSync('./commands');

const client = new Discord.Client();
module.exports = {client};
client.commands = new Discord.Collection();



// permet de récupérer toutes les commandes qu'on peut utiliser depuis le dossier commands
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command);
   
}


// message qui apparaît à chaque lancement de l'app
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('Ready!');
    
});


// test des commandes
client.on('message', async (message) => {

    

    if(!message.content.startsWith(prefix) || (message.author.id === client.user.id)  ) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift();
    
    
    if(!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message,args);
    } catch (error) {
        //console.error(error);
        message.reply('Une erreur a eu lieu durant l\'éxécution de la commande!  ');
    }
})



client.login(token);