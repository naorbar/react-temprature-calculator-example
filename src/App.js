import React, { Component } from 'react';
import './App.css';

import { Button, Grid, Col, Row, Label, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class App extends Component {

  constructor() {
    super();
    this.state = {
      unit: "Celsius", // Fahrenheith
      before: '',
      after: '',
      result: 'NON BOILING',
    }
  }

  changeUnits(e) {
    console.log("VALIDATING SELECT BOX VALUE..." + e.target.value);
    var res = (e.target.value === 'F') ? 'Fahrenheith' : 'Celsius';
    this.setState({
      unit: res
    });
    this.tempratureChanged(this.state.before);
  }

  tempratureChanged(val) {
    console.log("TEMPERATURE VALUE CHANGED..." + val);
    var res = (this.state.unit === 'Celsius') ? this.convertToFharenheith(val) : this.convertToCelsius(val);
    this.setState({
      before: val,
      after: res
    });
  }

  convertToFharenheith(value) {
    console.log("converting " + value + " to Fharenheith");
    return (value*9/5) + 32;
  }

  convertToCelsius(value) {
    console.log("converting " + value + " to Celsius");
    return (value-32)*5/9;
  }

  render() {
    return (
      <div className="App">
          <Button bsStyle="info">Click Me!</Button>
          <Grid>
            <Row>
              <Col md={8} className="show-grid">
                <code>{'Col md={8}'}</code>
              </Col>
              <Col md={4} className="show-grid">
                <code>{'Col md={4}'}</code>
              </Col>
            </Row>
            <Row>
              <Col md={3} className="show-grid">
                <code>{'Col md={3}'}</code>
              </Col>
              <Col md={4} className="show-grid">
                <code>{'Col md={4}'}</code>
              </Col>
              <Col md={5} className="show-grid">
                <code>{'Col md={5}'}</code>
              </Col>
            </Row>
          </Grid>

          <hr/>
          <FormGroup bsSize="small" controlId="formControlsSelectMultiple">
            <ControlLabel>Select Temprature Units:</ControlLabel>
            <FormControl componentClass="select" onChange={(e) => this.changeUnits(e)}>
                <option value="C">C</option>
                <option value="F">F</option>
            </FormControl>
          </FormGroup>

          <FormGroup bsSize="large" controlId="formControlsInput">
            <h2><Label bsStyle="primary">Enter Temprature in {this.state.unit}:</Label></h2>
            <FormControl type="text" onChange={(e) => this.tempratureChanged(e.target.value)}/>
          </FormGroup>

          <h3>
            <Label bsStyle="default">Result is: {this.state.after} = {this.state.result} water</Label>
          </h3>
      </div>
    );
  }
}

export default App;
