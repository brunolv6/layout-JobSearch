import React from 'react';

import './job-item.style.scss';

const JobItem = ({ id, vagas, url }) => {
    return (
            //target abre em outra janela o link
            //rel garante segurança para que não haja pishing attacks
            <a href={url} rel="noopener noreferrer" target="_blank" className={`job-item ${(id%2 === 0)? 'bg1': 'bg2'}`}>
                <div className='title'>
                    {vagas}
                </div>
                <div className='description'>
                    <p>Vaga disponivel para formados em Design, Relações Públicas dentre outros cursos com os requisitos de...</p>
                </div>
                <div className='extras-container'>
                    <div><strong>Empresa:</strong> IFood</div>
                    <div><strong>Nível:</strong> Júnior</div>
                    <div><strong>Salário:</strong> R$3200</div>
                </div>
            </a>
    );
};

export default JobItem;