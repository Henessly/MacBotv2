import {client} from "../Discord-Bot-Core/bot"

//Activity
client.on("ready", () => {
  client.user.setActivity("your data", {
    type: "STREAMING",
    url: "https://www.twitch.tv/notmactv"
  });
});
