import React from 'react';

import './container-item.style.scss';

const ContainerItem = props => {
    return (
        <div className='display'>
            <div className='container'>
                <div
                    className='background-image'
                    style={{
                        backgroundImage:`url(${props.empregos[0].url})`
                    }}
                />
                <div className='caixa-interna'>
                    <div
                        className='title'
                        id={props.empregos[0].id}>{props.empregos[0].title}
                    </div>
                </div>
            </div>
            <div className='container'>
                <div
                    className='background-image'
                    style={{
                        backgroundImage:`url(${props.empregos[1].url})`
                    }}
                />
                <div className='caixa-interna'>
                    <div
                        className='title'
                        id={props.empregos[1].id}>{props.empregos[1].title}
                    </div>
                </div>
            </div>
            <div className='container'>
                <div
                    className='background-image'
                    style={{
                        backgroundImage:`url(${props.empregos[2].url})`
                    }}
                />
                <div className='caixa-interna'>
                    <div
                        className='title'
                        id={props.empregos[2].id}>{props.empregos[2].title}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContainerItem;