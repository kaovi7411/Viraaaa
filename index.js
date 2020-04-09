const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const keep_alive = require('./keep_alive.js')

require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Merhaba');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!site') {
    msg.delete();
    msg.reply('⭐Web sitemiz http://shaiyatr.net/ bu linkten ulaşabilirsiniz.⭐');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('Merhaba Hoşgeldiniz.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gliter mob') {
    msg.reply('https://i.imgyukle.com/2020/02/11/nIV5z1.png');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ranhar') {
    msg.reply('https://i.imgyukle.com/2020/02/12/nI0OEy.png');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'f1') {
    msg.reply('https://i.imgyukle.com/2020/02/12/nI7898.png');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'rank') {
    msg.reply('http://shaiyatr.net/pvp-siralamasi/');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'rütbe') {
    msg.reply('http://shaiyatr.net/pvp-rutbeleri/');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'palaion') {
    msg.reply('https://i.imgyukle.com/2020/02/12/nIAGHI.png');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === '60epic') {
    msg.reply(' ``Öncelikle bu görevi yapmak için 60 aşırı mod olmak gerekir.``'); 
    msg.channel.send('`` 1.Adım : Öncelikle HARUİON, VE DONUK SERAP Öldürüp -Taht zindanına girmeniz gerek.``'); 
    msg.channel.send('`` 2.Adım : Ordaki ilk 6 bosun ölmesi gerekiyor-Son olarak Kirhirosun ölmesi ,Kriptikon ve Ölümsüz Cryptice ulasmanız gerek.``'); 
    msg.channel.send('`` 3.Adım : Kriptikon ölünce, Ölümsüz Cryptic Spawn olur.``'); 
    msg.channel.send('``4.Adım : Ölümdüz Cryptic öldürünce ondan bir taş düşer,Görevin baslayacagı taş Jehar taşı``');  
    msg.channel.send('``5.Adım Bossu öldürüp itemi aldıgınız zaman, Bosun hemen arkasnda bi delik acılır oraya girerek 60 epic görevini veren NPC (Jehar Teolama) ``');
    msg.channel.send(' ``6.Adım : Göreve baslamak için NPC ile konusun. NOT: GÖREV SADECE JEHAR TAŞI OLAN OYUNCU İÇİN GÖZÜKÜR.``'); 
    msg.channel.send('``7.Adım : Konusmaya devam edin.Sonra diyalogda bi kutu gelecek.Görev bi Baska görev itemi İstenecek. Sunak Parçası **SUNAK PARÇASI EP4 LE GELECEK Bİ İTEM OLACAK VE SHAİYADAKİ 1-60 SUNAKLARINDAN DÜŞECEK YANİ GÖREVİ YAPMAK İSTEYEN SUNAK AVLICAK Smile**``'); 
    msg.channel.send('``8.Adım : Jehar taşıyla beraber, Çantanızda 7 tane Sunak parçası olması gerekiyor..Bunlar cantanızda iken Jeharla konuşun. ve O anda size Irkınızı secmenizi isteyecek. Bilgileri iyi okuyarak silahinizi dogru seçiniz``');
    msg.channel.send('``Klasınızı seçtikten sonra size altın verecek``');  
    msg.channel.send('``9.Adım : konusmaya devam edin ...``'); 
    msg.channel.send('``10.adım: bu bölüm en önemli bölümdür Irkı sectikten sonra klasınızı secmenizi isteyecek.``'); 
    msg.channel.send('``NOT : HER KARAKTER SADECE 1 KEZ BU GÖREVİ YAPMA HAKKI KAZANIR- O YÜZDEN İTEMİ DOGRU SECTİGİNİZE EMİN OLUN. ``');
  }
});

client.on("message", message => {
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        const dmlog = new Discord.RichEmbed()
         .setTitle(`${client.user.username}'a Özelden Mesaj Gönderildi!`)
         .setColor('RANDOM')
         .addField('Mesajı Gönderen',` \`\`\` ${message.author.tag} \`\`\` `)
         .addField('Mesajı Gönderenin ID', ` \`\`\`${message.author.id}\`\`\` `)
         .addField(`Gönderilen Mesaj`, message.content)
         .setThumbnail(message.author.avatarURL) 
    client.channels.get("679383245951074304").send(dmlog);
    }
});













client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("MOVE_MEMBERS")) permlvl = 1;
  if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 2;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 4;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 6;
  if (message.author.id === ayarlar.sahip) permlvl = 5;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });





;

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

















client.login(ayarlar.token);

client.on('guildMemberAdd', (member) => {
    const guild = member.guild;


 let sChannel = member.guild.channels.find(c => c.name === 'bot-koruma')

    if(member.user.bot !==true){

    } 
    else {

    sChannel.send(`**Kaovi Koruma Sistemi**
Sunucuya Bir Bot Eklendi Ve Güvenlik Nedeniyle Banlandı
Banlanan Bot: **${member.user.tag}**
@everyone`)
    .then(() => console.log(`yasaklandı ${member.displayName}`))
    .catch(console.error);
       member.ban(member) 
  }  
  });


const yourID = "319121959726088192"; //Instructions on how to get this: https://redd.it/40zgse //Kendi İD'nizi Yazın
const setupCMD = "!rol" //İstediğiniz Komut Yapabilirsiniz örn : !kayıtol
let initialMessage = ``; //Dilediğiniz Şeyi Yazabilirsiniz
const roles = ["Savaşçı", "Nöbetçi","Suikastçi","Avcı","Pagan","Kahin","Cengaver","Muhafız","Korucu","Okçu","Büyücü","Rahip","Dark Oyuncu","Işık Oyuncu"];
const reactions = ["⚔", "🛡","🗡","🏹","🔮","✨","⚔", "🛡","🗡","🏹","🔮","✨","🌑","🌕"]; //İstediğiniz Emojiyi Ekleyebilirsiniz
const botToken = "NjY3ODY0Nzg1MzQxMTIwNTM0.Xkb5hA.A7LaYQxzvUcGtzWDgK0XdMzrG04";  //Buraya botunuzun tokenini koyunuz
                     
//Load up the bot...
const discord = require('discord.js');
const bot = new Discord.Client();
bot.login(botToken);
//If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`Rol almak İçin **"${role}"** Emojisine Tıkla!`); //DONT CHANGE THIS
    return messages;
}
bot.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})
bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});

client.on("message", (message) => {
  if (message.content.toLowerCase().startsWith(prefix + `ticketyardım`)) {
    const desteksohbet = message.guild.channels.find(channel => channel.name === "📢ticket-bildirim📢");
    const destekekip = message.guild.roles.find("name", "DC Moderatorü")
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: **SHAİYA TR Discord TİCKET Sistemi** :mailbox_with_mail:`)
    .setColor("RANDOM")
    .addField(`TİCKET Yardım`, `**[${prefix}ticketaç]()** -> TİCKET Açar!\n**[${prefix}ticketkapat]()** -> TİCKET kapatır!`)
    .addField(`Diğer`, `**[${prefix}ticketyardım]()** -> Yardım menüsünü gösterir.`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/691714684042084443/692801063899889825/always_simge_logo-01.jpg`)
    .setFooter(`Kaovi & seindleR`,`${message.author.avatarURL}`)
    message.channel.send({ embed: embed });
  }

if (message.content.toLowerCase().startsWith(prefix + `ticketaç`)) {
    const taleps = message.author
    const desteksohbet = message.guild.channels.find(channel => channel.name === "📢ticket-bildirim📢");
    const destekekip = message.guild.roles.find("name", "DC Moderatorü")
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "DC Moderatorü")) return message.channel.send(`Bu Sunucuda '**DC Moderatorü**' rolünü bulamadım bu yüzden TİCKET açamıyorum \nEğer sunucu sahibiysen, 💠 Staff Rolünü oluşturabilirsin.`);
    if (message.guild.channels.exists("name", "TİCKET-" + `${taleps.username}`)) return message.channel.send(`**Zaten bir TİCKET açmışsın !**`)
    message.guild.createChannel(`ticket-${taleps.username}`, "text").then(c => {
       c.setParent(message.guild.channels.find(channel => channel.name === "📢Ticket📢"));
        let role = message.guild.roles.find("name", "DC Moderatorü");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: TİCKET Kanalın oluşturuldu, ${c}.`).then(msg => msg.delete(5000));
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(`Hey ${taleps.username}!`, `TİCKET Kanalın başarılı bir şekilde açıldı ${destekekip.name}'a haber gönderdim. Yakında seninle iletişime geçecekler.'`)
        .addField(`**Eğer talebini sonlandırmak istersen ${prefix}ticketkapat yazarak**`, `**ve daha sonrasında kapat yazarak TİCKET talebini kapatabilirsin.**`)
        .setFooter("SHAİYA TR TİCKET Sistemi")
        c.send({ embed: embed });
        message.delete();
      desteksohbet.send(`${destekekip}`).then(msg => msg.delete(120000));
        const acildimesaj = new Discord.RichEmbed()
        .setColor("BLUE")
        .addField(`**Yeni bir TİCKET açıldı ;**`, `**${c}**`);
       desteksohbet.send(acildimesaj).then(msg => msg.delete(120000));
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `ticketkapat`)) {
    const taleps = message.author
    const sklogkanal = message.guild.channels.find(channel => channel.name === "📢ticket-log📢");
    const desteksohbet = message.guild.channels.find(channel => channel.name === "📢ticket-bildirim📢");
    const destekekip = message.guild.roles.find("name", "DC Moderatorü")
    const kapkanalid = message.channel.id
    const kapkanalname = message.channel.name
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Bu komutu kullanamazsın TİCKET kanalında olman gerekir.`).then(msg => msg.delete(5000));

    message.channel.send(`Destek Kanalını kapatmaya emin misin? kapatmak için **kapat** yazman yeterli.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === 'kapat', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();        
        const sklog = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${taleps.username} tarafından bir TİCKET kapatıldı`)
      .addField(`Kapatılan Talebin ID ;`,`${kapkanalid}`)
      .addField(`Kapatılan Talebin Adı ;`,`${kapkanalname}`)
      .addField(`Kapatan Kişinin ID ;`,`${taleps.id}`)
      .addField(`Kapatan Kişinin Adı ;`,`${taleps.username}`)
      .addField(`Kapatan Staff mı ?`,`❌`)
        const sklogstaff = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${taleps.username} tarafından bir TİCKET kapatıldı`)
      .addField(`Kapatılan Talebin ID ;`,`${kapkanalid}`)
      .addField(`Kapatılan Talebin Adı ;`,`${kapkanalname}`)
      .addField(`Kapatan Kişinin ID ;`,`${taleps.id}`)
      .addField(`Kapatan Kişinin Adı ;`,`${taleps.username}`)
      .addField(`Kapatan Staff mı ?`,`✅`)
        const kapatildimesaj = new Discord.RichEmbed()
        .setColor("RED")
        .addField(`**Açılan ${kapkanalname} isimli talep**`, `**TİCKET Sahibi ${taleps.username} tarafından kapatıldı.**`);
        const staffkapatildimesaj = new Discord.RichEmbed()
        .setColor("RED")
        .addField(`**Açılan ${kapkanalname} isimli TİCKET**`, `**${destekekip.name} ${taleps.username} tarafından kapatıldı.**`);
       if (message.member.roles.find("name","DC Moderatorü")) return desteksohbet.send(staffkapatildimesaj), sklogkanal.send(sklogstaff);
       if (!message.member.roles.find("name","DC Moderatorü")) return desteksohbet.send(kapatildimesaj), sklogkanal.send(sklog);
        })
        .catch(() => {
          m.edit('TİCKET Kapatma isteğin zaman aşımına uğradı.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
});