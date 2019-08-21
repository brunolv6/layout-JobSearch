import React from 'react';

import SearchBar from './components/search-bar/search-bar.components';
import  Container from './components/container/container.components';

import { connect } from 'react-redux';

import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <SearchBar/>
        {
          this.props.vagas?
            null
            :<Container/> 
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //não é um boa porque tem que esperar dar o fetch
  vagas: state.search.vagas
})

export default connect(mapStateToProps)(App);
