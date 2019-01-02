import { BaseStore } from 'src/Shared';
import WeatherCardModel from './WeatherCard/WeatherCardModel';
import HttpMethod from 'src/Shared/HttpMethod';

export class WeatherBodyStore extends BaseStore {
    public cards: WeatherCardModel[] = [];

    constructor() {
        super();
        this.loadCards();
    }

    loadCards = async() => {
        let appSetting = await this.loadAppSetting();
        let city = 'London';
        let countryCode = 'uk';
        let apiurl = `${appSetting.api}?q=${city},${countryCode}&APPID=${appSetting.apikey}`;
        let result  = await this.doRequest<any>(apiurl, HttpMethod.GET);
        console.warn(result);
    }

    // http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ae5e37db2d45a69f977d060ebc13045d
}

export default WeatherBodyStore;