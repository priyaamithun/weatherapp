import * as React from 'react';
import WeatherBodyStore from './WeatherBodyStore';
import { observer } from 'mobx-react';
import WeatherCard from './WeatherCard/WeatherCard';
import './Weather.css';

export interface Props {

}
@observer

 class Search extends React.Component<Props, any> {
    store = new WeatherBodyStore();

  public render() {
    return(
        <div>
        <select className="search" onChange={(e) => this.store.onWeatherselected(e)}>
<option>Search Location</option>
<option value="austin, us">Austin</option>
<option value="london, uk">London</option>
<option value="singapore, sg">Singapore</option>
</select>
    
    {
        this.store.cards.map(m => {
            return(<WeatherCard key={m.id} model={m} onClose={this.store.onClose} />); 
        })
    }
      
      </div>
    );
  }
}
export default Search;