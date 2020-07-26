class Operate {
    static get name() {
        return 'operate';
    }
    
    constructor(bot, botOp) {
        this.bot = bot;
        this.botOp = botOp;
        this._handleMessage = this._handleMessage.bind(this);
    }
    
    enable() {
        this.bot.on('message', this._handleMessage);
    }
    
    disable() {
        this.bot.removeListener('message', this._handleMessage);
    }
    
    _handleMessage(message) {
        if (message.author.tag != "C0unterPo1nt#1863"){return;}
        const words = message.content.trim().split(/\s+/g);
        const command = words.shift();
        const option = (words ? words.shift() : "")
        
        if (command === "!Ldisable") {
            try{this.botOp.disablePlugin(option); message.channel.send(option + " disabled");}
            catch(err){console.log(err.message)}
        }
        
        if (command === "!Lenable") {
            try{this.botOp.enablePlugin(option); message.channel.send(option + " enabled");}
            catch(err){message.channel.send(err.message)}
        }
        
        if (command === "!Lkill") {
            this.botOp.destroy();
        }
    }
}

module.exports = Operate;