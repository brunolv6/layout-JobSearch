import React from 'react';

import SearchBar from './components/search-bar/search-bar.components';
import  Container from './components/container/container.components';

import './App.scss';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Container/>
    </div>
  );
}

export default App;
