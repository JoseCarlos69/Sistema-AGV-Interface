import React from 'react';
import estilos from './index.module.css';
import LegendaCard from '../../Util/LegendaCard';
import IconeStatus from '../../../Assets/IconeStatus';
import IconeDefeito from '../../../Assets/IconeDefeito';

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
