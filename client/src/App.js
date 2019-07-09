import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

//Components
import InputVerb from './components/InputVerb';
import Header from './components/Header';
import Settings from './components/Settings';

class App extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      tempus: "present"
    };
  }


render() {
  
  return (
    <div className="App">
    <Header />
    <Settings /> 
    <InputVerb 
    />
    

    </div>
  );
}
  
}

export default App;
