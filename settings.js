//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is Meffixx Botz
My Creator is Zibanex😎` //Costomize Alive Message (type your message in `` )

global.owner = ['+628981614707'] //Owner number in aive msg
global.premium = ['+628981614707'] //Owner Number info
global.ownernomer = '+628981614707' //Owner Number <<<

global.ownername = `Zibanex` //Owner Name
global.botname = '  Meffixx Botz //Bot Name

global.button = '☰ GITHUB ☰' //Costomize A Button Name In Alive Message
global.btnurl = 'https://github.com/KaiZax' //Change Your Button's URL

global.region = 'Indonesia, Jawa Tengah, Depok' //Country Region

global.packname = 'Meffixx Botz' //Bot Pacage Name
global.author = Zibanex //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©Zibanex.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://github.com/KaiZax' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done Cuy✅',
    admin: '*Khusus Admin Cuy!😴*',
    botAdmin: 'Bot Bukan Admin Njir!😞',
    owner: '*Khusus Owner! Luwh mau ngapain?🤨*',
    group: '*Fitur Khusus Group!*',
    private: '*Fitur Private Chat!*',
    bot: 'Fitur Khusus Bot Njing!😠',
    wait: '▰▰▰▱▱▱▱▱▱Loading...',
    error: 'Error!!! Maaf Cok!',
    endLimit: '*Awoakwokaowk Limitmu Habis Coy! Mampus🗿*',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
