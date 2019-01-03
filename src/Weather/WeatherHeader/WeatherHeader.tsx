import * as React from 'react';
import './WeatherHeader.css';
export interface Props {
}

export class WeatherHeader extends React.Component<Props, any> {
  public render() {
    return (
      <div className="navbar clearfix">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    );
  }
}

export default WeatherHeader;
