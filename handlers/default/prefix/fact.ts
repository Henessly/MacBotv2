import * as Discord from "discord.js";

const facts = [
    "A Cow-Bison hybrid is called a beefalo.",
    "You are gay.",
    "*Friends* is not that good of a show.",
    "*The Office* is not that good of a show",
    "chief keef",
    "Jeffrey Epstein didn't kill himself.",
    "Subscribe with twitch prime to MacPlaysTV",
    "me like lola bunny space jam but no am furry",
    "MacBot is secretely collecting your data and selling it to Jeff Bezos himself.",
    "Communism doesn't work.",
    "You must be 16 years or older to moderate.",
    "Furry roles can't say.",
    "Mac's profile picture is actually a picture of him. Any other picture is just CGI.",
    "日本語は最もクールな言語です。",
    "waga baba bobo",
    "maneatingwhale is best mod",
    "I am hosted by the Postmaster DA of Montana",
    "I am a bot. Yes, people have asked that.",
    "Koichi Hirose is best bot.",
    "Tim Sarcasm is a fat greasy idiot",
    "if you enjoy playing league of legends or osu you're objectively wrong",
    "Mel best mod",
    "t̴͇̐h̵̆͝ȩ̵͆r̸̅̽è̷̕ ̴̪̎i̸͝ͅs̴̔͑ ̸͛͠n̸̪͊o̵̮͊ ̴́ͅr̶͔̈́e̸̓͌a̷͚̋s̵̗̐ǫ̸̔n̷̐͂ ̵̻̏t̸́̈́o̸̺̊ ̶̲͝c̸̽̍r̶͂̾ỹ̶̘,̴̦̂ ̴̉͑c̴͑͘h̷̛̳ǐ̸͋l̸͉͘d̸̫̓.̵͌̐ ̷̆̍t̷̂̕h̵̐͜e̵̺͝ ̴͗͑v̶̅̎ò̴̆i̴̥̔d̵͋̉ ̷̃̅ẇ̸̓ỉ̷̖l̴̰̄ḷ̷͂ ̴͑͒t̵̻̍à̶ke you soon.",
    "Link your discord to your twitch and get Twitch Sub role!",
    "hamburger",
    "Join Keku & Co.",
    "Sheri Blossom has divorced 8 times.",
    "try out .8ball"
];

module.exports = {
    name: 'fact',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    // permissions: [],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        let fact = facts[Math.round(Math.random() * (facts.length - 1)) ];
    
        const Embed = new Discord.RichEmbed()
            .setColor("#349eeb")
            .setTitle("**Fact**")
            .setDescription(fact);
        msg.channel.send(Embed);
    }
}
