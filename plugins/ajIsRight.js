class AjIsRight {
    static get name() {
        return 'AjIsRight';
    }

    constructor(bot, botOp) {
        this.bot = bot;
        this._handleMessage = this._handleMessage.bind(this);
        this.response = 'AJ IS RIGHT';
    }
    
    enable() {
        this.bot.on('message', this._handleMessage);
    }
    
    disable() {
        this.bot.removeListener('message', this._handleMessage);
    }

    _handleMessage(message){
        if (message.author.tag == "MisguidedMowgli#4236" && message.content.trim().endsWith(".")){
            message.channel.send(this.response);          
        }
    }   
}

module.exports = AjIsRight;