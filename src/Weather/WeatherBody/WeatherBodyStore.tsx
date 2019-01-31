import { BaseStore } from 'src/Shared';
import WeatherCardModel from '../Model/WeatherCardModel';
import HttpMethod from 'src/Shared/HttpMethod';
import { observable } from 'mobx';

export class WeatherBodyStore extends BaseStore {
    @observable public cards: WeatherCardModel[] = [];

    constructor() {
        super();
    }

    onClose = (id: any) => {
        this.cards.splice(id.city, 1);
    }

    onWeatherselected(e: any) {
        this.loadCards(e.target.elements.city.value);
    }

    loadCards = async(city: string) => {
        let appSetting = await this.loadAppSetting();
        let apiurl = `${appSetting.api}?q=${city}&APPID=${appSetting.apikey}`;
        let result  = await this.doRequest<any>(apiurl, HttpMethod.GET);
        let found = this.cards.find(f => f.id === result.id);
        if (!found) {
            this.cards.push(this.getWeatherCardModel(result));
        }
        console.warn(result);
    }

    getWeatherCardModel(model: any): WeatherCardModel {
        let result = new WeatherCardModel();
        result = model;
        result.country = model.sys.country;
        result.temperature = model.main.temp;
        result.humidity = model.main.humidity;
        result.windSpeed = model.wind.speed;
        return result;
    }
}

export default WeatherBodyStore;