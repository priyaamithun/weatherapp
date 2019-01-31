import * as React from 'react';

import { WeatherHeader } from '..';

import WeatherBodyStore from './WeatherBodyStore';

import WeatherCard from './WeatherCard/WeatherCard';

import { observer } from 'mobx-react';
import './WeatherBody.css';

export interface Props {

}
@observer

export class WeatherBody extends React.Component<Props, {}> {

    store = new WeatherBodyStore();
 public render() {

        let search = (
<div>
{/* <select className="search" onSubmit={(e) => this.store.onWeatherselected(e)}>
<option value="austin, us">Austin</option>
<option value="london, uk">London</option>
<option value="singapore, sg">Singapore</option>
</select> */}

<input type="search" placeholder="Search for city"/>
<input type="submit" onSubmit={(e) => this.store.onWeatherselected(e)}/>
</div>
);
        return (

        <div>
<div className="Navbar">
            <WeatherHeader />

            {search}
            </div>
                {
this.store.cards.map(m => {
return(<WeatherCard key={m.id} model={m} onClose={this.store.onClose} />); 
})
}
</div>

        );

    }

}

export default WeatherBody;
