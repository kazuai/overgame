const Discord = require('discord.js');
const client = new Discord.Client();
const marque = "	";

const config = { 
  "token"  : "NTU5NDI1Njk2MzIyMDI3NTMy.D3lNeA.7gXmJd7GV1POkKBy39UcQNtGSq4",
  "prefix" : "."
};
let ownerID = "559425696322027532"

client.on('ready',() => {
      let statuses = [
        "Fuck",
        "You",
        "..."
    ]
    setInterval(function() {
  
      let status = statuses[Math.floor(Math.random()*statuses.length)];

      client.user.setPresence({
          game: {
              name: status,
              type: "STREAMING",
              url: "https://www.twitch.tv/kazuestla"
          }
      })
    }, 3000)
});
client.login(config.token);
console.log(`Prêt a être utiliser `)

client.on('message', message => {

  if (message.content === config.prefix + 'help'){
    if(message.deletable) message.delete();
    if(message.author.id !== ownerID) {
      let help1 = new Discord.RichEmbed()
      .addField("🔧 Modération", "**.ban {mention}** : Bannir un membre (necessite BAN MEMBERS en perms).\n**.kick {mention}** : Kick un membre (necessite KICK MEMBERS en perms).")
      let help2 = new Discord.RichEmbed()
      .addField("😂 FUN", "**.vento** ; **.yaurarien** ; **.yarieneu** ; **.iss** ; **.viktim** ; **.deter** ; **.epilepsie** ; **.aok** ; **.tcon**")
      let help3 = new Discord.RichEmbed()
      .addField("🔑 Utile", "**.pub** : Envoie dans le channel/mp mon serveur.\n**.ui ({mention})** : Donne des infos sur sois meme ou sur quelqu'un d'autre.\n**.pp ({mention})** : Donne sa photo de profile ou celles des autres.\n**.si** : Donne des infos sur le serveur.\n**.invisible** : Affiche un caractère invisible.\n**.spp** : Afficher la pp du serveur.\n**.ping** : Latence.")
      let help4 = new Discord.RichEmbed()
      .addField("📺 Game", "**.setg**, **.setl**, **.sets**, **.setw**")
      message.channel.send(help1).then(message => message.delete(60000)).catch(console.error);
      message.channel.send(help2).then(message => message.delete(60000)).catch(console.error);
      message.channel.send(help3).then(message => message.delete(60000)).catch(console.error);
      message.channel.send(help4).then(message => message.delete(60000)).catch(console.error);
    }
  }



// Modération

if (message.content.startsWith('.kick')) {
const member = message.mentions.users.first();
const moustapha = message.guild.member(member);
if (moustapha) {
moustapha.kick({
}).then(() => {
message.channel.sendMessage(`**Membre expulsé :** ${member.tag}`);
}).catch(err => {
message.channel.sendMessage('**Je n\'est pas les permission pour l\'expulser.**');
console.error(err);
console.log(`Commande .kick demandé par ${client.user.username}#${client.user.discriminator}`);
});
}
}
       
if (message.content.startsWith('.ban')) {
const member = message.mentions.users.first();
const moustapha = message.guild.member(member);
if (moustapha) {
moustapha.ban({
}).then(() => {
message.channel.sendMessage(`**Membre banni :** ${member.tag}`);
}).catch(err => {
message.channel.sendMessage('**Je n\'est pas les permission pour le bannir.**');
console.error(err);
console.log(`Commande .ban demandé par ${client.user.username}#${client.user.discriminator}`);
});
}
}



             
// Utilite
if(message.content.startsWith(".hug")){
  if (message.deletable) message.delete();
  var subreddits = [   
    'https://media.giphy.com/media/wnsgren9NtITS/giphy.gif',
    'https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif',
    'https://media.giphy.com/media/HaC1WdpkL3W00/giphy.gif',
    'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
    'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
    'https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif',
    'https://media.giphy.com/media/4sGpCjbs49jVK/giphy.gif',
    'https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif',
    'https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif',
    'https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif',
    'https://media.giphy.com/media/C2RDSxHKGAfQI/giphy.gif',
    'https://media.giphy.com/media/LHIRwG1tytH20/giphy.gif',
    'https://media.giphy.com/media/fLv2F5rMY2YWk/giphy.gif',
    'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
    'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
    'https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif',
    'https://media1.tenor.com/images/ca54612fd5ebb5028a25df469c21a23a/tenor.gif?itemid=12880592',
    'https://media2.giphy.com/media/tTdAJwKqH1KGQ/giphy.gif',
    'https://media1.tenor.com/images/3255ef702d1bb0bbeadf71462ea7a305/tenor.gif?itemid=7970435',
    'https://i.pinimg.com/originals/bc/14/3b/bc143be41cef5a35b36973ecaf22ea04.gif',
    'https://i.pinimg.com/originals/d5/f3/fa/d5f3fa1d8becc79b61b0fe11f1581632.gif',
    'https://media0.giphy.com/media/8tpiC1JAYVMFq/200w.webp?cid=3640f6095c3c7987744f634241f0939c',
    'https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif',
    'https://media.giphy.com/media/EGauSkKQZuXxS/giphy.gif',
    'https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif'
  ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
  let user = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  .addField("ID", message.author.id, true)
  .addField("NAME", `${user.username}#${client.user.discriminator}`, true)
  .setDescription(`${message.author} te fais un câlin **${user.username}**`)
  .setThumbnail(client.user.displayAvatarURL)
  .setAuthor(`${client.user.username}#${client.user.discriminator}`, client.user.displayAvatarURL)
  .setImage(sub)
  .setColor('RANDOM')
  .setFooter(`.hug`)
  .setTimestamp()
  message.channel.sendEmbed(embed);
}
if(message.content === "@everyone"){
 if (message.deletable) message.delete();
 message.channel.send("d'accord mek");
}
if (message.content.startsWith(config.prefix + "ui")){
  if (message.author.id !== ownerID) {
  } else {
    message.delete().catch(O_o=>{});
  let user = message.mentions.users.first() || message.author;
  let day = message.guild.joinedAt.getDate()
  let month = 1 + message.guild.joinedAt.getMonth()
  let year = message.guild.joinedAt.getFullYear()
  let hour = message.guild.joinedAt.getHours()
  let min = message.guild.joinedAt.getMinutes()
  let days = user.createdAt.getDate()
  let months = 1 + user.createdAt.getMonth()
  let years = user.createdAt.getFullYear()
  let hours = user.createdAt.getHours()
  let mins = user.createdAt.getMinutes()
  let embed = new Discord.RichEmbed()
  .setDescription(`**${marque}**`)
  .setAuthor(`${user.username}`, `${user.avatarURL}`)
  .setThumbnail(user.avatarURL)
  .setColor("#41f470")
  .addField("IDentifiant :", `• ${user.id}`)
  .addField("Pseudo :", `• ${user.tag}`)
  .addField("Avatar :", `${user.avatarURL}`)
  .addField('Date de création du compte :', `• ${days}/${months}/${years} à ${hours}:${mins}`) 
  .addField("Date d'arrivée dans le serveur :", `• ${day}/${month}/${year} à ${hour}:${min}`)
  .setFooter(`.ui`, `${message.author.avatarURL}`)
  message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
  console.log(`Commande .ui demandé par ${client.user.username}#${client.user.discriminator}`);
}}
if (message.content.startsWith(config.prefix + "mpui")){
  if (message.author.id !== ownerID) {
  } else {
    message.delete().catch(O_o=>{});
  let user = message.mentions.users.first() || message.author;
  let days = user.createdAt.getDate()
  let months = 1 + user.createdAt.getMonth
  let years = user.createdAt.getFullYear()
  let hours = user.createdAt.getHours()
  let mins = user.createdAt.getMinutes()
  let embed = new Discord.RichEmbed()
  .setDescription(`**${marque}**`)
  .setAuthor(`${user.username}`, `${user.avatarURL}`)
  .setThumbnail(user.avatarURL)
  .setColor("#41f470")
  .addField("IDentifiant :", `• ${user.id}`)
  .addField("Pseudo :", `• ${user.tag}`)
  .addField("Avatar :", `${user.avatarURL}`)
  .addField('Date de création du compte :', `• ${days}/${months}/${years} à ${hours}:${mins}`) 
  .setFooter(`.mpui`, `${message.author.avatarURL}`)
  message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
  console.log(`Commande .ui demandé par ${client.user.username}#${client.user.discriminator}`);
}}
if (message.content === config.prefix + "pub_hak'sin"){
  if (message.author.id !== ownerID) {
  } else {
    message.delete().catch(O_o=>{});
    var embed = new Discord.RichEmbed()
    .setDescription(`PUB SERVEUR`)
    .setColor('RANDOM')
    .addField(`𝐑𝐢𝐯𝐞𝐫𝐃𝐚𝐥𝐞.`, `:shield: Protection anti-raid.
    :white_check_mark: Serveur propre et organisé.
    :globe_with_meridians: Echange entre les kop1s.
    :robot: De nombreux bots sont a votre dispositions.
    :scales: Pas d'abus de pouvoir.
    Rejoins nous https://discord.gg/AwXGcQN 🌚`)
    .setThumbnail("https://cdn.discordapp.com/icons/535018631826898946/cb9ce5cb66580cfe6b7851e2a4f490a4.jpg?size=2048")
    .setFooter(`.pub_hak'sin`, `${message.author.avatarURL}`)
    .setURL("https://discord.gg/AwXGcQN")
    message.channel.send(embed).catch(console.error);
console.log(`Commande .pub_haku demandé par ${client.user.username}#${client.user.discriminator}`);
}}

if (message.content.startsWith(config.prefix + 'pp')){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let user = message.mentions.users.first() || message.author;
    var embed = new Discord.RichEmbed()
    .setDescription(`**${marque}**`)
    .setColor('#41f470')
    .addField(`Avatar de ${user.username}`, `${user.avatarURL}?size=2048`)
    .setImage(`${user.avatarURL}?size=2048`)
    .setFooter(`.pp`, `${message.author.avatarURL}`)
    message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
    console.log(`Commande .pp demandé par ${client.user.username}#${client.user.discriminator}`);
  }}

  if (message.content.startsWith(config.prefix + 'spp')){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    var embed = new Discord.RichEmbed()
    .setDescription(`**${marque}**`)
    .setColor('#41f470')
    .addField(`Avatar du serveur:`, `${message.guild.iconURL}?size=2048`)
    .setImage(`${message.guild.iconURL}?size=2048`)
    .setFooter(`.spp`, `${message.author.avatarURL}`)
    message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
    console.log(`Commande .spp demandé par ${client.user.username}#${client.user.discriminator}`);
  }}

  if(message.content === config.prefix + "ping") {
      if (message.author.id !== ownerID) {
      } else {
    message.delete().catch(O_o=>{});
    message.channel.send(`${client.pings[0]}ms`).then(message => message.delete(60000));
    console.log(`Commande .ping demandé par ${client.user.username}#${client.user.discriminator}`);
  }}

  if(message.content === config.prefix + "invisible"){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    message.channel.sendMessage("󠂪󠂪 ")
    console.log(`Commande .invisible demandé par ${client.user.username}#${client.user.discriminator}`);
    }}

    if(message.content.startsWith(config.prefix + "si")){
      if (message.author.id !== ownerID) {
      } else {
        message.delete().catch(O_o=>{});
    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    let hour = message.guild.createdAt.getHours()
    let min = message.guild.createdAt.getMinutes()
      let serverinfo = new Discord.RichEmbed()
      .setColor("#18dea2")
      .setDescription(`**${marque}**`)
      .setThumbnail(message.guild.iconURL)
      .addField("Fondateur :", `• ${message.guild.owner}`)
      .addField("ID :", `• ${message.guild.id}`, true)
      .addField("Membre(s) :", `• ${message.guild.memberCount}`)
      .addField("Connecté(s) :", `• ${online.size}`)
      .addField("Icone", `${message.guild.iconURL}`)
      message.channel.send(serverinfo).then(message => message.delete(60000)).catch(console.error);
      let serverinfo2 = new Discord.RichEmbed()
      .setColor("#18dea2")
      .addField("Bot(s) :", `• ${message.guild.members.filter(m => m.user.bot).size}`)
      .addField("Humain(s) :", `• ${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}`)
      .addField("Rôle(s) :", `• ${message.guild.roles.size}`)
      .addField("Channel(s) :", `• ${message.guild.channels.size}`)
      .addField("Région :", `• ${message.guild.region}`)
      .addField("Date de création du serveur :",`• ${day}/${month}/${year} à ${hour}:${min}`)
      .setFooter(`.si`, `${message.author.avatarURL}`)
      message.channel.send(serverinfo2).then(message => message.delete(60000)).catch(console.error);
    console.log(`Commande .si demandé par ${client.user.username}#${client.user.discriminator}`)
    }}

// FUN
  if(message.content === "._."){
    let embed = new Discord.RichEmbed()
    .setDescription(`._. ._. ._. ._. ._.`)
    .setThumbnail(message.author.avatarURL)
    .setColor("RANDOM")
    .setFooter(`._.`, `${message.author.avatarURL}`)
    message.channel.send(embed).catch(console.error);
  }
  if(message.content === "'-'"){
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .setFooter(`'-'`, `${message.author.avatarURL}`)
    .setDescription(`'-' '-' '-' '-' '-'`)
    message.channel.send({embed});
  }
  if(message.content === "‘^’"){
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .setFooter(`‘^’`, `${message.author.avatarURL}`)
    .setDescription(`‘^’ ‘^’ ‘^’ ‘^’ ‘^’`)
    message.channel.send({embed});
  }
  if(message.content === ".-."){
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .setFooter(`.-.`, `${message.author.avatarURL}`)
    .setDescription(`.-. .-. .-. .-. .-.`)
    message.channel.send({embed});
  }
  if(message.content.startsWith(config.prefix + "gpalu")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
     .setDescription(`Gpalu`)
     .setImage("https://media.tenor.com/images/bd17d0bbdde4a9b6956f1a5815b58461/tenor.gif")
    .setColor("RANDOM")
    .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
    message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
    }}

    if(message.content.startsWith(config.prefix + "iss")){
        if (message.author.id !== ownerID) {
        } else {
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed()
        .setDescription(`Issou`)
        .setImage("https://cdn.discordapp.com/attachments/529041820613607426/529365417110798359/images.png")
       .setColor("#41c4f4")
       .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
       message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
       }}

       if(message.content.startsWith(config.prefix + "yaurarien")){
        if (message.author.id !== ownerID) {
        } else {
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed()
        .setDescription(`YAURARIEN`)
        .setImage("https://cdn.discordapp.com/attachments/529042285875298317/529368083505217547/1530491535-sans-titre-4.png")
       .setColor("RANSOM")
       .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
       message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
       }}
       
       
       if(message.content.startsWith(config.prefix + "yarieneu")){
        if (message.author.id !== ownerID) {
        } else {
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed()
        .setDescription(`YARIENEU`)
        .setImage("https://cdn.discordapp.com/attachments/529042285875298317/529369104549806130/44992-full.png")
       .setColor("RANDOM")
       .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
       message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
       }}

       if(message.content.startsWith(config.prefix + "vento")){
        if (message.author.id !== ownerID) {
        } else {
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed()
        .setDescription(`Ventoline`)
        .setImage("https://cdn.discordapp.com/attachments/527610019714301952/529369047033315337/JPEG_20181231_011718.jpg")
        .setColor("RANDOM")
        .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
        message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
        }}


       if(message.content.startsWith(config.prefix + "viktim")){
        if (message.author.id !== ownerID) {
        } else {
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed()
        .setDescription(`Viktim`)
        .setImage("https://cdn.discordapp.com/attachments/529042849581367296/529417127963394049/inconnu.gif")
       .setColor("RANDOM")
       .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
       message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
       }}

       if(message.content.startsWith(config.prefix + "deter")){
        if (message.author.id !== ownerID) {
        } else {
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed()
        .setDescription(`Deter`)
       .setImage("https://cdn.discordapp.com/attachments/529042849581367296/529418535143866398/4637B2C86015EC2DC99E5E98E960EDA7D2E917EC.png")
       .setColor("RANDOM")
       .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
       message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
       }}

       if(message.content.startsWith(config.prefix + "toutou")){
          if (message.author.id !== ownerID) {
          } else {
          message.delete().catch(O_o=>{});
          let embed = new Discord.RichEmbed()
          .setDescription(`Bon toutou`)
          .setImage("https://pbs.twimg.com/media/DqOwI5CXcAAEiE8.jpg")
          .setColor("RANDOM")
          .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
          message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
          }}


       if(message.content.startsWith(config.prefix + "epilepsie")){
          if (message.author.id !== ownerID) {
          } else {
          message.delete().catch(O_o=>{});
          let embed = new Discord.RichEmbed()
          .setDescription(`Epileptique`)
          .setImage("http://aws-cf.imdoc.fr/prod/photos/2/4/8/4909248/5370331/big-53703314d1.gif?v=18")
          .setColor("RANDOM")
          .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
          message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
          }}


          if(message.content.startsWith(config.prefix + "tcon")){
            if (message.author.id !== ownerID) {
            } else {
            message.delete().catch(O_o=>{});
            let embed = new Discord.RichEmbed()
            .setDescription(`T con`)
            .setImage("https://img.buzzfeed.com/buzzfeed-static/static/2015-02/16/6/enhanced/webdr12/anigif_enhanced-2720-1424084401-2.gif")
            .setColor("RANDOM")
            .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
            message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
            }}

            if(message.content.startsWith(config.prefix + "aok")){
              if (message.author.id !== ownerID) {
              } else {
              message.delete().catch(O_o=>{});
              let embed = new Discord.RichEmbed()
              .setDescription("Ah ok.")
              .setImage("https://media.tenor.co/images/6f19044d0d018bc75a2ad279cbba4e7c/tenor.gif")
              .setColor("RANDOM")
              .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
              message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
              }}
            if(message.content.startsWith(config.prefix + "danse")){
              if (message.author.id !== ownerID) {
              } else {
              message.delete().catch(O_o=>{});
              let embed = new Discord.RichEmbed()
              .setDescription("Chat.")
              .setImage("https://media.discordapp.net/attachments/548806718881136640/559005083358986240/20190323_172613.gif?width=239&height=300")
              .setColor("RANDOM")
              .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
              message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
              }}
            if(message.content.startsWith(config.prefix + "sa")){
              if (message.author.id !== ownerID) {
              } else {
              message.delete().catch(O_o=>{});
              let embed = new Discord.RichEmbed()
              .setDescription("Ca me dérange pas moi j'aime sa.")
              .setImage("https://media.discordapp.net/attachments/548806718881136640/559006166504570910/20190323_173038.gif?width=400&height=225")
              .setColor("RANDOM")
              .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
              message.channel.send(embed).then(message => message.delete(60000)).catch(console.error);
              }}


})