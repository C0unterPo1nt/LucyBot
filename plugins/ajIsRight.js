class AjIsRight {
    static get name() {
        return 'AjIsRight';
    }
    
    constructor(bot, botOp) {
        this.bot = bot;
        this._handleMessage = this._handleMessage.bind(this);
        var response = "AJ IS RIGHT";
    }
    
    enable() {
        this.bot.on('message', this._handleMessage);
    }
    
    disable() {
        this.bot.removeListener('message', this._handleMessage);
    }

    _handleMessage(message){
        if (message.author.tag != "C0unterPo1nt#1863" && !message.content.endsWith(".")){
            return;
        }
        else{
            //console.log(response)
            //message.channel.send(response);
        }
    }   
}

module.exports = AjIsRight;