import React from 'react';
import estilos from './index.module.css';
import LegendaCard from '../LegendaCard';
import IconeDefeito from '../../Assets/iconeDefeito';
import IconeStatus from '../../Assets/iconeStatus';

const CardAtividade = ({ status, sensor, condicao, descricao }) => {
    return (
        <div className={`${estilos.CardAtividade} ${estilos[condicao]}`}>
            <LegendaCard legenda={sensor} />

            <h2>{status}</h2>
            <p>{descricao}</p>

            {
                (condicao !== 'negativa') ? <IconeStatus /> : <IconeDefeito />
            }
        </div>
    );
};

export default CardAtividade;
