const TimeHandler = require('./timeHandler');

class FourTwenty {
    static get name() {
        return 'fourTwenty';
    }

    constructor(client, bot) {
        this.client = client;
        this.bot = bot;
        this._send420Message = this._send420Message.bind(this);
        this.scheduleMessage = this.scheduleMessage.bind(this);
        this.timeHandler = new TimeHandler();
    }

    enable() {
        this.time420 = this.timeHandler.findNext(4, 20);
        this.timer = this.scheduleMessage();
    }

    disable() {
        clearTimeout(this.timer);
    }

    scheduleMessage() {
        return this.timeHandler.scheduleEvent(this.time420, this._send420Message);
    }

    _send420Message() {
        this.client.guilds.forEach(server => { server.systemChannel.send('110100100'); });
        this.scheduleMessage();
    }
}

module.exports = FourTwenty;
