const DiscordBot = require('./src');
const plugins = require('./plugins');
const config = require('./config');

const bot = new DiscordBot(config);

Object.keys(plugins).forEach(plugin => {
    bot.addPlugin(plugins[plugin].name, plugins[plugin]);
});
