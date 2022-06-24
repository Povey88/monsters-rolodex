import { Component } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import SearchBox from './components/card-list/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import Card from './components/card/card.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
      super();

      this.state = {
        monsters: [],
        searchField: '',
    };
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users};
      })
      );
  }
    

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this; 

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
    <div className="App">
    
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
      onChangeHandler={onSearchChange} 
      placeholder='search monsters' 
      className='monsters-search-box' />
      
      <CardList monsters={filteredMonsters} />
    </div>

    );
  }
}


export default App;


