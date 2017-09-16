/* eslint-disable new-cap */
const Discord = require('discord.js');

/**
 * An extensible Discord bot
 */
class DiscoBot {
    constructor(settings) {
        this._client = new Discord.Client();
        this._plugins = new Map();

        this._client.login(settings.token);
    }

    /**
     * Adds a plugin to the bot
     *
     * @param name The name of the plugin
     * @param ctor - The constructor that will be used to build the plugin
     */
    addPlugin(name, ctor) {
        if (this._plugins.has(name)) {
            throw new Error(`Plugin ${name} already loaded`);
        }

        this._plugins.set(name, new ctor(this._client));
        this.enablePlugin(name);
    }

    /**
     * Removes a plugin from the bot
     *
     * @param name The name of the plugin to be removed
     */
    removePlugin(name) {
        if (!this._plugins.has(name)) {
            throw new Error(`Plugin ${name} is not loaded`);
        }

        this.disablePlugin(name);
        delete this._plugins.delete(name);
    }

    /**
     * Enables a plugin that was previously loaded
     *
     * @param name The name of the plugin to be enabled
     */
    enablePlugin(name) {
        if (!this._plugins.has(name)) {
            throw new Error(`Plugin ${name} is not loaded`);
        }

        const plugin = this._plugins.get(name);

        if (plugin.enable) {
            plugin.enable();
        }
    }

    /**
     * Disabled a plugin that was previously loaded
     *
     * @param name The name of the plugin to be disabled
     */
    disablePlugin(name) {
        if (!this._plugins.has(name)) {
            throw new Error(`Plugin ${name} is not loaded`);
        }

        const plugin = this._plugins.get(name);

        if (plugin.disable) {
            plugin.disable();
        }
    }

    /**
     * The bot logs out and closes all connections to the Discord servers.
     */
    destroy() {
        this._plugins.clear();
        this._client.destroy();
    }
}

module.exports = DiscoBot;
