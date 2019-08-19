import React from 'react';

import SearchBar from './components/search-bar/search-bar.components';
import  Container from './components/container/container.components';

import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <SearchBar/>
        <Container/> 
      </div>
    );
  }
}

export default App;
