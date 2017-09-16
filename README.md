# Discobot Starter Kit

This is a starting point for building awesome [Discord](https://discordapp.com/) bots 🤖.
The provided plugin system lets you ease into the whole thing, building one step at a time.

To get started you can clone this repository

```
git clone https://github.com/Pupix/discobot-starter-kit.git
```
install dependencies

```
yarn install 
```

and create a discord app by following [this guide](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)

Once you have done that save the token in [config.json](config.json) and start our bot with:

```
yarn start
```

## Plugins

The bot comes with some working plugins.

| Name | Description |
|------|------------|
| Ping | Will respond with a `pong` whenever a user writes `ping`  |
| Status | Will log to console various bot  messages based on its current state |
| Echo |  Will respond with the passed `message` whenever a user writes `!echo message` |
| Admin-commands | Adds commands such as `!kick @user`, `!ban @user`, `!mute @user`, `!unmute @user` and `!purge` that can be used to manage the userbase and messages of a server |

#### How to build plugins

The plugins are ES6 classes with a static method `name` that will help identify the plugin.

The constructor of each plugin will be invoked receive an instance of a [discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) client when it's first loaded. Check the [discord.js documentation](https://discord.js.org/#/docs/main/stable/class/Message) for more details about what's possible to access within the client.

`enable` and `disable` methods, if provided, will be called whenever the plugin is enabled or disabled.

**Example plugin:**

```js

class ExamplePlugin {
    static get name() {
        return 'example-plugin';
    }
    
    constructor(client) {
        // The plugin is being created
    }
    
    enable() {
        // The plugins has been enabled
    }
    
    disable() {
        // The plugin has been disabled
    }
}
```

