class Ping {
    static get name() {
        return 'ping';
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

        if (message.content !== 'ping') {
            return;
        }

        message.channel.send('pong');
    }
}

module.exports = Ping;
