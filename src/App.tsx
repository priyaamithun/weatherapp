import * as React from 'react';
import './App.css';
import { WeatherBody } from './Weather';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <WeatherBody />
      </div>
    );
  }
}

export default App;
