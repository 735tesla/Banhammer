var Botkit = require('botkit');
var process = require('process');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: ''
})
bot.startRTM(function(err,bot,payload) {
  console.log(process.env);
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});
