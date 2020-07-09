class Friend {
    static get name() {
        return 'friend';
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
    
    generateFriendMessage(message) {
        let friendString = ["God you're so sexy and cool", "Hot take, bro", "You're such a leo", "Real goblin hours, huh?", "Shut up, you fckin kinnie", "I'm glad we're friends", "Your brain is wrinkly and your meat is huge.", "Hate that", "You're just saying that for discord clout", "Let me say slurs, I wanna be a real gamer."];
        let min = 0, max = friendString.length - 1;
        message.channel.send(friendString[Math.floor(Math.random() * (max - min + 1) ) + min]);
    }
    
    _handleMessage(message){
        if (message.author.tag != "allthesehatchets#6457"){
            return;
        }
        else{
            this.generateFriendMessage(message);
        }
    }   
}

module.exports = Friend;