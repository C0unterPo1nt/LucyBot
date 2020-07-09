class Echo {
    static get name() {
        return 'echo';
    }

    constructor(bot, botOp) {
        this.bot = bot;
        this._handleMessage = this._handleMessage.bind(this);
    }

    enable() {
        this.bot.on('message', this._handleMessage);
    }

    disable() {
        this.bot.removeListener('message', this._handleMessage);
    }

    _handleMessage(message) {
        if (message.author.bot) {
            return;
        }

        const words = message.content.match(/^!(\w+)(.*)/);

        if (!words) {
            return;
        }

        const [, command, content] = words;

        if (command !== 'echo') {
            return;
        }

        message.channel.send(content.trim());
    }
}

module.exports = Echo;
