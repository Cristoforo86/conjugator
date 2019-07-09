import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import axios from 'axios';

// let randomNumber = Math.floor(Math.random()*6);

class InputVerb extends Component {

  constructor(props) {
    super(props);

    this.state = {
      randomVerb: {}
    };
  }


  getRandomVerb = async () => {
    const res = await axios.get(
        `http://localhost:5000/random/random`
    );
    console.log(res.data)
    this.setState({ randomVerb: res.data[0] }, function(){
        console.log(this.state.randomVerb)
    });
  }



  render() {


  return (
    <div>
      <p id="InputVerb_p">Conjugate the following verb:</p>
      <p>{this.state.randomVerb.person}. person {this.state.randomVerb.numerus} 
      {this.state.randomVerb.tempus} {this.state.randomVerb.infinitive}
      
      </p>
      
      <InputGroup id="InputVerb_Input">
        <Input placeholder="type in verb..." />
        <InputGroupAddon addonType="append">
          <InputGroupText>Help</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon addonType="append">
          <InputGroupText>next verb</InputGroupText>
        </InputGroupAddon>
        <Button onClick={this.getRandomVerb}></Button>
      </InputGroup>
      
    </div>
  );
  }
};

export default InputVerb;