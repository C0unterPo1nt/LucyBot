const DiscordBot = require('./src');
const plugins = require('./plugins');
const config = require('./config');

const bot = new DiscordBot(config);

bot.pid = process.pid;

Object.keys(plugins).forEach(plugin => {
    bot.addPlugin(plugins[plugin].name, plugins[plugin]);
    console.log(plugins[plugin].name + ' loaded...');
});
