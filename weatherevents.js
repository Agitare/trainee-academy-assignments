class WeatherEvent {
    constructor(timestamp) {
        this.timestamp = timestamp;
    }

    getInformation() {
        return "";
    }

    print() {
        console.log(`${this.timestamp} ${this.getInformation()}`);
    }
}

class TemperatureChangeEvent extends WeatherEvent {
    constructor(timestamp, tempature) {
        super(timestamp);
        this.tempature = tempature;
    }

    getInformation() {
        return `temperature: ${this.tempature} °C`;
    }
}

class HumidityChangeEvent extends WeatherEvent {
    constructor(timestamp, humidity) {
        super(timestamp);
        this.humidity = humidity;
    }

    getInformation() {
        return `humidity: ${this.humidity} %`;
    }
}

class WindStrengthChangeEvent extends WeatherEvent {
    constructor(timestamp, windspeed) {
        super(timestamp);
        this.windspeed = windspeed;
    }

    getInformation() {
        return `wind strength: ${this.windspeed} m/s`;
    }
}

const weatherEvents = [];

weatherEvents.push(new TemperatureChangeEvent("2022-11-29 03:00", -6.4));
weatherEvents.push(new HumidityChangeEvent("2022-11-29 04:00", 95));
weatherEvents.push(new WindStrengthChangeEvent("2022-11-30 13:00", 2.2));

weatherEvents.push(new TemperatureChangeEvent("2022-12-1 14:00", 2.7));
weatherEvents.push(new HumidityChangeEvent("2022-12-1 21:30", 75));
weatherEvents.push(new WindStrengthChangeEvent("2022-12-2 9:00", 4.5));

weatherEvents.forEach(weatherEvent => weatherEvent.print());
