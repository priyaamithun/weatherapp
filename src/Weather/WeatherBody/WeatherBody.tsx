import * as React from 'react';
import { WeatherFooter, WeatherHeader } from '..';
import WeatherBodyStore from './WeatherBodyStore';
import WeatherCard from './WeatherCard/WeatherCard';
import { observer } from 'mobx-react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

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
<div>
                    <MDBDropdown >
                    <MDBDropdownToggle caret="true" color="primary">
                      Weather Search
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic="true" onChange={(e) => this.store.onWeatherselected(e)}>
                      <MDBDropdownItem value="austin, us">Austin</MDBDropdownItem>
                      <MDBDropdownItem  value="london, uk">London</MDBDropdownItem>
                      <MDBDropdownItem value="singapore, sg">Singapore</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
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
