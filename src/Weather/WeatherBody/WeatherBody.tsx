import * as React from 'react';
import { WeatherFooter, WeatherHeader } from '..';
import WeatherBodyStore from './WeatherBodyStore';
import WeatherCard from './WeatherCard/WeatherCard';

export interface Props {
}

export class WeatherBody extends React.Component<Props, {}> {
    store = new WeatherBodyStore();

    public render() {
        return (
        <div>
            <WeatherHeader />
                {
                    this.store.cards.map(m => {
                        return(<WeatherCard key={m.id} model={m} />); 
                    })
                }
            <WeatherFooter />
        </div>
        );
    }
}

export default WeatherBody;
