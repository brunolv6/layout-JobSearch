import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchBar from './components/search-bar/search-bar.components';
import  Container from './components/container/container.components';
import Results from '../src/pages/results/results.page';

import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <SearchBar/>
        <Switch>
          <Route path='/search' component={Results}/>
          <Route exact path='/' component={Container}/> 
        </Switch>
      </div>
    );
  }
}

export default App;
