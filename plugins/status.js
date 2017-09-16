class Echo {
    static get name() {
        return 'status';
    }

    constructor(bot) {
        this.bot = bot;

        this._handleReady = this._handleReady.bind(this);
        this._handleWarning = this._handleWarning.bind(this);
        this._handleError = this._handleError.bind(this);
        this._handleReconnecting = this._handleReconnecting.bind(this);
        this._handleResume = this._handleResume.bind(this);
        this._handleDisconnect = this._handleReconnecting.bind(this);
    }

    enable() {
        this.bot.on('ready', this._handleReady);
        this.bot.on('warn', this._handleWarning);
        this.bot.on('error', this._handleError);

        this.bot.on('reconnecting', this._handleReconnecting);
        this.bot.on('resume', this._handleResume);
        this.bot.on('disconnect', this._handleDisconnect);
    }

    disable() {
        this.bot.removeListener('ready', this._handleReady);
        this.bot.removeListener('warn', this._handleWarning);
        this.bot.removeListener('error', this._handleError);

        this.bot.removeListener('reconnecting', this._handleReconnecting);
        this.bot.removeListener('resume', this._handleResume);
        this.bot.removeListener('disconnect', this._handleDisconnect);
    }

    _handleReady() {
        console.log('Bot has started');
    }

    _handleWarning(warning) {
        console.warn('Bot warning: ', warning);
    }

    _handleError(error) {
        console.error('Bot error: ', error);
    }

    _handleReconnecting() {
        console.log('Bot is reconnecting');
    }

    _handleResume() {
        console.log('Bot has resumed');
    }

    _handleDisconnect() {
        console.error('Bot has been disconnected! RIP');
    }
}

module.exports = Echo;
