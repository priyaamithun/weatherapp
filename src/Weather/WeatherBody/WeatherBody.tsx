import * as React from 'react';
import { WeatherHeader } from '..';
import { observer } from 'mobx-react';
import Search from './Search';
import './WeatherBody.css';
export interface Props {
}

@observer
export class WeatherBody extends React.Component<Props, {}> {

    public render() {
   
        return (
        <div>
        <div className="NavContent">
        <WeatherHeader />
        <Search />
        </div>
            </div>
        );
    }
}

export default WeatherBody;
