import * as React from 'react';

import { WeatherFooter, WeatherHeader } from '..';

import WeatherBodyStore from './WeatherBodyStore';

import WeatherCard from './WeatherCard/WeatherCard';

import { observer } from 'mobx-react';
import './Weather.css';

export interface Props {

}
@observer

export class WeatherBody extends React.Component<Props, {}> {

    store = new WeatherBodyStore();
 public render() {

        let search = (
<div>
<select className="search" onChange={(e) => this.store.onWeatherselected(e)}>
<option value="austin, us">Austin</option>
<option value="london, uk">London</option>
<option value="singapore, sg">Singapore</option>
</select>
</div>
);
        return (

        <div>
            <WeatherHeader />

            {search}
                {

                    this.store.cards.map(m => {

                        return(<WeatherCard key={m.id} model={m} onClose={this.store.onClose} />); 

                    })

                }

            <WeatherFooter />

        </div>

        );

    }

}

export default WeatherBody;
