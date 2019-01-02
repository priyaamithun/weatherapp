import * as React from 'react';
import WeatherCardModel from './WeatherCardModel';
import {  Card, CardBody, CardTitle, CardText, Col, MDBBtn  } from 'mdbreact';
import  './WeatherCard.css';

export interface Props {
    model: WeatherCardModel;
}
 
export interface Istate {
Image1: '../images/Austin-Texas-Capital.jpg';
Image2: '../images/new-york-2017-columbus-circle-01.jpg';
Image3: '../images/Singapore-Merlion1.jpg';

} 

export class WeatherCard extends React.Component<Props, Istate, {}> {

  public render() {
    return (
      <div className="Card clearfix"> 
        <Col>
        <Card style={{width: '22rem'}} >
      
        <CardBody className="CardBody">
          <CardTitle>Weather Report</CardTitle>
          <CardText className="CardText">
        <ul>
          <li>City: {this.props.model.city}</li>
       <li>Country: {this.props.model.country}</li>
        <li>Temperature: {this.props.model.temperature}</li>
        </ul>
        </CardText>
        <MDBBtn className="button" size="sm" color="light-orange" href="#">Click Detailed Weather</MDBBtn>

        </CardBody>
        </Card>
        </Col>
      </div>
    );
  }
}

export default WeatherCard;
