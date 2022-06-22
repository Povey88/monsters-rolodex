import { Component } from 'react';
import { ChakraProvider } from '@chakra-ui/react'

import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
      super();

      this.state = {
        monsters: [],
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      },
      () => {
        console.log(this.state);
    
      }));
  };

  render() {
    console.log('render');
    return <div className="App">
    <input />
    
    {this.state.monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
      );
    })}
    D
    </div>;
  }
}

export default App;
