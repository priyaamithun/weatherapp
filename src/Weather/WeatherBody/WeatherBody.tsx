import * as React from 'react';
import { WeatherFooter, WeatherHeader } from '..';
import WeatherBodyStore from './WeatherBodyStore';
import WeatherCard from './WeatherCard/WeatherCard';
import { observer } from 'mobx-react';

export interface Props {
}

@observer
export class WeatherBody extends React.Component<Props, {}> {
    store = new WeatherBodyStore();

    public render() {
        let search = (
                    // <div>
                    //     <select onChange={(e) => this.store.onWeatherselected(e)}>
                    //         <option value="austin, us">Austin</option>
                    //         <option value="london, uk">London</option>
                    //         <option value="singapore, sg">Singapore</option>
                    //     </select>
                    // </div>

        <div 
         className="btn-group"
        >
        <button 
         className="btn btn-primary dropdown-toggle mr-4" 
         type="button" 
         data-toggle="dropdown" 
         aria-haspopup="true"
         aria-expanded="false"
        >Basic dropdown
        </button>

         <div className="dropdown-menu">
         <a className="dropdown-item" href="#">Action</a>
         <a className="dropdown-item" href="#">Another action</a>
         <a className="dropdown-item" href="#">Something else here</a>
         <div className="dropdown-divider" />
  <a className="dropdown-item" href="#">Separated link</a>
</div>

<div className="dropdown">
  <button 
   className="btn btn-primary dropdown-toggle" 
   type="button" 
   id="dropdownMenu1" 
   data-toggle="dropdown"
   aria-haspopup="true" 
   aria-expanded="false"
  >Material dropdown
  </button>
  <div className="dropdown-menu dropdown-primary">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
    <a className="dropdown-item" href="#">Something else here</a>
   </div>
   </div>
        </div>
);
        return (
        <div>
            {search}
            <WeatherHeader />
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
