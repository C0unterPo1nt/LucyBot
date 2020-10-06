class TimeHandler {
    static get name() {
        return 'timeHandler';
    }

    constructor(client, bot) {
        this.client = client;
        this.findNext = this.findNext.bind(this);
        this.advance12Hours = this.advance12Hours.bind(this);
        this.advance24Hours = this.advance12Hours.bind(this);
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
    findNext(hour, minute, second = 0) {
        let currentTime = new Date();
        currentTime.setHours(11);
        let targetTime = new Date();
        targetTime.setHours(hour);
        targetTime.setMinutes(minute);
        targetTime.setSeconds(second);
        while (currentTime > targetTime) {
            targetTime = this.advance12Hours(targetTime);
        }
        return targetTime;
    }

    /*
        takes a date object and advances the clock by 12 hours
    */
    advance12Hours(time) {
        if (time.getHours >= 12){
            time = this.advance24Hours(time);
            time.setHours(time.getHours() - 12)
        } else {
            time.setHours(time.getHours() + 12); 
        }
        return time;
    }

    /*
        takes a date object and advances it by one day
    */
    advance24Hours(time) { return time.setDate(time.getDate() + 1); }

    /* 
        Takes a date object
        returns the number of miliseconds until the provided time
    */
    milisecondsUntil(time) {
        let currentTime = Date.now();
        return time - currentTime;
    }

    /*
        @param time a Date object, func a function to be executed
        Schedules a function to be executed at the provided date and time and returns the timeout
    */
    scheduleEvent(time, func) {
        let timerDuration = this.milisecondsUntil(time);
        console.log("Event Scheduled for " +time + "and"+ timerDuration + "mSeconds")
        return setTimeout(func, timerDuration);
    }
}

module.exports = TimeHandler;