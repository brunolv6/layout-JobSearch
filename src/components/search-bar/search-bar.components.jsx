import React from 'react';

import './search-bar.style.scss'

class SearchBar extends React.Component {
    constructor(){
        super();
        this.state = {
            search: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    render(){
        return (
            <div className='search-bar'>
                <h1>Busque seu futuro</h1>
                <input className='search-input' type='search' name='search' value={this.state.search} onChange={this.handleChange}/>
                <button className='search-button' name='q'>Search</button>
            </div>
        );
    }
}
    

export default SearchBar;