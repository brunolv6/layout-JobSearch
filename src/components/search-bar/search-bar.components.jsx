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

    handleSubmit = event => {
        //previne o browser de reload/refresh!!!
        event.preventDefault();
        fetch('http://localhost:3000/', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                find: this.state.search
            })
        })
            .then(res => res.json())
            .then(value => console.log(value));

        this.setState({search: ''});
    }

    render(){
        return (
            <div className='search-bar'>
                <h1>Busque seu futuro</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className='search-input' type='search' name='search' value={this.state.search} onChange={this.handleChange}/>
                    <button className='search-button' name='q'>Search</button>
                </form>
            </div>
        );
    }
}
    

export default SearchBar;