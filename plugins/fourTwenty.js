class FourTwenty {
    static get name() {
        return 'fourTwenty';
    }

    constructor(client, bot) {
        this.client = client;
        this._send420Message = this._send420Message.bind(this);
    }

    enable() {
        this.client.on('message', this._send420Message);
    }

    disable() {
        this.client.removeListener('message', this._send420Message);
    }
    
    

    _send420Message(message) {
        if (message.author.tag === "C0unterPo1nt#1863"){
            for (let server of this.client.guilds){
                server.systemChannel.send("110100100");
            }
        }
    }
}

module.exports = FourTwenty;