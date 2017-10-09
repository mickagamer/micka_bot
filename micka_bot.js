const options = require("./options");
const tmi = require('tmi.js');

let client = new tmi.client(options);

client.connect();

client.on('connected', (adress, port) => {
    console.log(client.getUsername() + " s'est connecté sur : " + adress + ", port : " + port);
    client.say("mickagamer_", "Salut la compagnie ! Je m'occupes du reste Kappa");
});


// DB FOR COMMANDES
var db = {
    youtube: " , mon youtube ce trouve ici : https://youtube.com/micka69250",
    twitter: " , mon twitter ce trouve ici : https://twitter.com/micka69_",
    gw2: "  , voici les informations pour Guild Wars 2 : 📌 ► Acheter GW2:PoF : http://guildwars2.go2cloud.org/SH64 | ► Jouer Gratuitement : http://guildwars2.go2cloud.org/SH62",
    subon: "  , a présent, la chaîne est désormais en mode SUB-ONLY !",
    suboff: "  , a présent, la chaîne n'est plus en mode SUB-ONLY !",
    site: "  , mon site perso ce trouve ici : http://micka.gamer.free.fr/"
	
};
client.on("chat", function (channel, userstate, message, self) {
    if (self) return;
    if(message.startsWith("!")){
        var cmdBuffer = message.substring(1).split(" ")[0].toLowerCase();

        if (db.hasOwnProperty(cmdBuffer)) {
            client.say(channel, db[cmdBuffer]);
        }
    }
});


/// BOT SAY HELLO VIEWER WHEN IS JOIN ///
client.on("join", function(channel, username, self) {
  if (self) return;
  client.say(channel, "Coucou " + username)
});
/// BOT SAY GOODBYE VIEWER WHEN IS LEAVE ///
client.on("part", function(channel, username, self) {
  if (self) return;
  client.say(channel, "A bientôt " + username)
});

/// BOT SAY " COUCOU TOI " WHEN IS WSP ///
client.on("whisper", function (from, userstate, message, self){
    if (self) return;
    client.whisper(from, "Coucou toi !");
});



///////////////////////////////////////////// COMMANDES /////////////////////////////////////////////

/// TIMEOUT ///
client.on("timeout", function (channel, username, reason, duration, self) {
  if (self) return;
  client.say(channel, "⚠️ " + username + " a été éjécté du salon pour " + duration + " secondes.")
});
/// BAN ///
client.on("ban", function (channel, username, reason, self) {
  if (self) return;
  client.say(channel, "🛑 " + username + " a été banni du stream.")
});
/// CLEARTCHAT ///
client.on("clearchat", function (channel, self) {
  if (self) return;
  client.say(channel, "Le salon de tchat à été effacé par un modérateur ou par le streameur.")
});
/// FOLLOWERS-ONLY ///
client.on("followersonly", function (channel, enabled, length, self) {
  if (self) return;
  client.say(channel, "Le stream est en mode followersonly.")
});
/// SLOW MODE A AMELIORER AVEC IF & ELSE ///
client.on("slowmode", function (channel, enabled, length, self) {
    if (self) return;
    client.say(channel, "Le tchat est en slow mode.")
    return true;
});


///////////////////////////////////////////// CHEER /////////////////////////////////////////////

client.on("cheer", function (channel, userstate, message, self) {
  if (self) return;
  client.action(channel, username + message)
});


///////////////////////////////////////////// HOST /////////////////////////////////////////////

/// LA PERSONNE QUE JE HOST ///
client.on("hosting", function (channel, target, viewers, self) {
  if (self) return;
  client.action(channel, "J'héberge désormais " + target + " avec " + viewers + " spectateurs.")
});
/// JE N'HEBERGE PLUS PERSONNE ///
client.on("unhost", function (channel, viewers, self) {
  if (self) return;
  client.action(channel, "Je ne suis plus en host !")
});


///////////////////////////////////////////// A TESTER /////////////////////////////////////////////

/// SUB ///
client.on("subscription", function (channel, username, method, message, userstate, self) {
  if (self) return;
  client.say(channel, username + " viens de s'abonner " + " . Merci à toi ! " + method)
});
//// RE-SUB ///
client.on("resub", function (channel, username, months, message, userstate, methods, self) {
  if (self) return;
  client.say(channel, username + " viens de se ré-abonner pour le " + months + " mois d'affiliés. " + " Merci à toi ! " + methods)
});
