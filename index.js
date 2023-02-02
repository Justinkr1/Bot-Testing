require("dotenv").config()
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require(`discord.js`);

const prefix = '!';

const client = new Client({ intents: [GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("Bot is online!");

    client.user.setActivity(`IDK`, {type: "IDK" });

})

client.on("messageCreate", (message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //COMMANDS

// test command

if (command === 'test') {
    message.channel.send("If you are in class CSC-325 React with :one:!");
}

// testing create channel
if (command === 'create-channel') {
    const channelName = message.content.split(" ").slice(1).join(" ");
    const guild = message.guild;

    if (!channelName) {
      return message.channel.send("Please provide the course number and channel # (ex. CSC_325_G1).");
    }

    guild.channels
      .create(channelName, { type: "text" })
      .then(channel => message.channel.send(Created ,{channelName} ,channel))
      .catch(console.error);
  }

}))




client.login(process.env.BOT_TOKEN);