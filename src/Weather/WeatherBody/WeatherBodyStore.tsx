import { BaseStore } from 'src/Shared';
import WeatherCardModel from './WeatherCard/WeatherCardModel';

export class WeatherBodyStore extends BaseStore {
    public cards: WeatherCardModel[] = [];

    constructor() {
        super();
        this.loadCards();
    }

    loadCards() {
        // temp populate weather
        let c1 = new WeatherCardModel();
        c1.id = 1;
        c1.city = 'Austin';
        c1.country = 'United States';
        c1.temperature = 15;
        this.cards.push(c1);

        let c2 = new WeatherCardModel();
        c2.id = 2;
        c2.city = 'Singapore';
        c2.country = 'Singapore';
        c2.temperature = 35;
        this.cards.push(c2);

        let c3 = new WeatherCardModel();
        c3.id = 3;
        c3.city = 'New Jersey';
        c3.country = 'United States';
        c3.temperature = 10;
        this.cards.push(c3);
    }
}

export default WeatherBodyStore;