class FourTwenty {
    static get name() {
        return 'fourTwenty';
    }

    constructor(client, bot) {
        this.client = client;
        this._send420Message = this._send420Message.bind(this);
        this._find420 = this._find420.bind(this);
        this._setMessageTimeout = this._setMessageTimeout.bind(this);
        this.convertTime = this.convertTime.bind(this);
        this.buildTime = this.buildTime.bind(this);
        this.shift420 = 15610000;
        this.halfDay = 43200000;
        this.hour = 0;
        this.minute = 30;
        this._setMessageTimeout();
    }

    enable() {
        
    }

    disable() {
        
    }
    
    convertTime() {
        let mSecs = this.minute * 60000;
        mSecs += this.hour * 3600000;
        return mSecs;
    }
    
    /*
        returns the current local 12 hour time in milliseconds
    */
    buildTime() {
        let currentTime = new Date();
        let twelveHourTime = currentTime.getMilliseconds();
        twelveHourTime += currentTime.getSeconds() * 1000;
        twelveHourTime += currentTime.getMinutes() * 60000;
        twelveHourTime += (currentTime.getHours() % 12) * 3600000;
        return twelveHourTime;
    }
    
    /* 
        Takes the current time in milliseconds since 1/1/70 00:00:00 UTC
        returns the number of miliseconds until next instance of 4:20
    */
    _find420() {
        let twelveHourTime = this.buildTime();
        if (twelveHourTime < this.shift420) {
            return this.shift420 - twelveHourTime;
        } else {
            return this.halfDay - twelveHourTime + this.shift420;
        }
    }

    _setMessageTimeout() {
        let next420 = this._find420();
        setTimeout(this._send420Message, next420);
    }
            
    

    _send420Message() {
        this.client.guilds.forEach(server => {server.systemChannel.send("110100100");});
        setTimeout(this._setMessageTimeout, 60000);
    }
}

module.exports = FourTwenty;