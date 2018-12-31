import * as React from 'react';
import WeatherCardModel from './WeatherCardModel';

export interface Props {
    model: WeatherCardModel;
}

export class WeatherCard extends React.Component<Props, {}> {
  public render() {
    return (
      <div>
        City: {this.props.model.city}
        Country: {this.props.model.country}
        Temperature: {this.props.model.temperature}
      </div>
    );
  }
}

export default WeatherCard;
