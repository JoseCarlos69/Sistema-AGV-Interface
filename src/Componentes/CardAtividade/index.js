import React from 'react';
import IconeDefeito from '../../Assets/iconeDefeito';
import IconeStatus from '../../Assets/iconeStatus';
import estilos from './index.module.css';

const CardAtividade = ({ status, sensor, condicao, descricao }) => {


    return (
        <div className={`${estilos.CardAtividade} ${estilos[condicao]}`}>
            <h2>{status}</h2>
            <p>{descricao}</p>

            {
                (condicao !== 'negativa') ? <IconeStatus /> : <IconeDefeito />
            }
        </div>
    );
};

export default CardAtividade;
