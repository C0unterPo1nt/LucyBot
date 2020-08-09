class Power {    
    static get name() {
        return 'Power';
    }

    constructor(client, bot) {
        this.client = client;
        this._handleMessage = this._handleMessage.bind(this);
        this.imgPath = './assets/powerCow.jpg';
    }
    
    enable() {
        this.client.on('message', this._handleMessage);
    }
    
    disable() {
        this.client.removeListener('message', this._handleMessage);
    }
    
    /* Checks message for requirements to send response */
    _checkContent(message) {
        let content = message.content.trim();
        let endChars = ['.', '!', '?', '"', "'", ')', ']', '}', ',', ];
        let loopCheck = false;
        
        if (message.author.tag !== "Deku Scrub#8925"){ return false; }
        
        while(loopCheck === false){
            loopCheck = true;
            for (let endChar of endChars) {
                if (content.endsWith(endChar)){
                    content = content.substr(0, content.length - 1);
                    loopCheck = false;
                }
            }    
        }
        
        
        content = content.toLowerCase();
        
        if (content.endsWith('power')){
            return true;
        } else {
            return false;
        }
        
    }

    _handleMessage(message){
        if (this._checkContent(message)) {
            message.channel.send({files: [this.imgPath]});      
        }
    }   
}

module.exports = Power;