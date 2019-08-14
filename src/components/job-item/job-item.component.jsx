import React from 'react';

import './job-item.style.scss';

const JobItem = ({ key, vagas }) => {
    return (
            <div className='job-item' >
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
            </div>
    );
};

export default JobItem;