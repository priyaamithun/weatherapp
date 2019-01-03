import * as React from 'react';
import WeatherCardModel from '../../Model/WeatherCardModel';
import {  Card, CardBody, CardTitle, CardText, Col } from 'mdbreact';
import { observer } from 'mobx-react';
import  './WeatherCard.css';

export interface Props {
    model: WeatherCardModel;
    onClose: ((id: number) => void);
}
 
@observer
export class WeatherCard extends React.Component<Props, {}> {

  public render() {
    return (
      <div className="Card clearfix"> 
        <Col>
          <button onClick={() => this.props.onClose(this.props.model.id)} className="button">X</button>
          <Card style={{width: '22rem'}} >
            <CardBody className="CardBody">
              <CardTitle>Weather Report</CardTitle>
              <CardText className="CardText">
                <ul>
                  <li>City: {this.props.model.name}</li>
                  <li>Country: {this.props.model.country}</li>
                  <li>Temperature: {this.props.model.temperature}</li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default WeatherCard;
