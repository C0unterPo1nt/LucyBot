class TimeHandler {
    static get name() {
        return 'timeHandler';
    }

    constructor(client, bot) {
        this.client = client;
        this.findNext = this.findNext.bind(this);
        this.advance12Hours = this.advance12Hours.bind(this);
        this.advance24Hours = this.advance24Hours.bind(this);
        this.milisecondsUntil = this.milisecondsUntil.bind(this);
        this.scheduleEvent = this.scheduleEvent.bind(this);
    }

    enable() {
        
    }

    disable() {
        
    }
    
    /*
        takes the provided clock face values and generates a date object matching the next chronological instance of that time
    */
    findNext(hour, minute = 0, second = 0) {
        hour = hour % 12;
        let currentTime = new Date();
        let targetTime = new Date();
        targetTime.setHours(hour);
        targetTime.setMinutes(minute);
        targetTime.setSeconds(second);
        while (currentTime.getTime() >= targetTime.getTime()) {
            targetTime = this.advance12Hours(targetTime);
        }
        return targetTime;
    }
    
    /*
        takes a date object and advances the clock by 12 hours
    */
    advance12Hours(time) { 
        if (time.getHours() >= 12){
            time = this.advance24Hours(time);
            time.setHours(time.getHours() - 12);
        } else {
            time.setHours(time.getHours() + 12); 
        }
        return time;
    }
    
    /*
        takes a date object and advances it by one day
    */
    advance24Hours(time) {
        time.setDate(time.getDate() + 1);
        return time;
    }
    
    /* 
        Takes a date object
        returns the number of miliseconds until the provided time
    */
    milisecondsUntil(time) {
        let currentTime = Date.now();
        return currentTime - time;
    }
    
    /*
        @param time a Date object, func a function to be executed
        Schedules a function to be executed at the provided date and time
    */
    scheduleEvent(time, func) {
        setTimeout(func, this.milisecondsUntil(time));
        return;
    }
}

module.exports = TimeHandler;