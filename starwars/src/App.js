import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Character';
import { Button } from 'reactstrap';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people/')
    .then(response => {
      setCharacters(response.data.results)
    })
    },[])
console.log(characters)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters characters={characters}/>
    </div>
  );
}

export default App;
