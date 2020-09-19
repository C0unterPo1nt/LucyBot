class FourTwenty {
    static get name() {
        return 'fourTwenty';
    }

    constructor(client, bot) {
        this.client = client;
        this._changeMood = this._changeMood.bind(this);
        this._find12 = this._find12.bind(this);
        this._setMoodTimeout = this._setMoodTimeout.bind(this);
        this.convertTime = this.convertTime.bind(this);
        this.buildTime = this.buildTime.bind(this);
        this.shift12 = 43200000;
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
    _find12() {
        let twelveHourTime = this.buildTime();
        if (twelveHourTime < this.shift420) {
            return this.shift12 - twelveHourTime;
        } else {
            return this.halfDay - twelveHourTime + this.shift12;
        }
    }

    _setMoodTimeout() {
        let next12 = this._find12();
        setTimeout(this._changeMood, next12);
    }

    _changeMood() {
        //todo: change avatar to a random expression
        setTimeout(this._setMoodTimeout, 60000);
    }
}

module.exports = FourTwenty;