import React from 'react';
import ContainerItem from '../container-item/container-item.component'

import './container.style.scss';
import DATA_SET from '../../dados/empregos'

class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            empregos: DATA_SET
        }
    }

    render(){
        return(
            <div>
                <ContainerItem empregos={this.state.empregos}/>
            </div>
        )
    }
}

export default Container;