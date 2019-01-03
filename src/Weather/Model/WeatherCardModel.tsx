import WeatherModel from './WeatherModel';

export class WeatherCardModel {
    id: number;
    name: string;
    weather: WeatherModel;

    // need manual mapping
    country: string;
    temperature: number;
    humidity: number;
    windSpeed: number;    
}

export default WeatherCardModel;