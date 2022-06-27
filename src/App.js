import { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Text, Heading } from '@chakra-ui/react';
import SearchBox from './components/card-list/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import Card from './components/card/card.component';
import logo from './logo.svg';
import './App.css';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
  })

  setFilteredMonsters(newFilteredMonsters);

}, [monsters, searchField]);


   const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
      };


  return(
    <div className="App">
    
     <Heading fontSize='40px' color='#4299E1' fontFamily={'fantasy'}>Monsters Rolodex</Heading>

      <SearchBox 
      onChangeHandler={onSearchChange} 
      placeholder='search monsters' 
      className='monsters-search-box' />
      
    <CardList monsters={filteredMonsters} />
    </div>
  );
};


export default App;


