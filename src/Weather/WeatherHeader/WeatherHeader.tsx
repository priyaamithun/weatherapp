import * as React from 'react';
import './WeatherHeader.css';
export interface Props {
}

export class WeatherHeader extends React.Component<Props, any> {
  public render() {
    return (
      <div className="nav clearfix">
        <ul className="header">
          <li><a href="" >Home</a></li>
          <li><a href="" >About Us</a></li>
          <li><a href="" >Contact Us</a></li>
        </ul>
      </div>
    );
  }
}

export default WeatherHeader;
