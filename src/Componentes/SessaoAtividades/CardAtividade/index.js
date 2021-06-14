import React from 'react';
import estilos from './index.module.css';
import LegendaCard from '../../Util/LegendaCard';
import IconeStatus from '../../../Assets/IconeStatus';
import IconeDefeito from '../../../Assets/IconeDefeito';
// Redux
import { useSelector } from 'react-redux';

const CardAtividade = ({ status, sensor, condicao, descricao }) => {
    // Redux
    const { loading } = useSelector((state) => state.sensores);

    return (
        <div className={`${estilos.CardAtividade} ${estilos[condicao]} ${estilos[status]}`}>
            { loading && <span className={estilos.spinner}></span> }
            <LegendaCard legenda={sensor} />

            <h2>{status}</h2>
            <p>{descricao}</p>

            {
                (condicao !== 'danificado') ? <IconeStatus /> : <IconeDefeito />
            }
        </div>
    );
};

export default CardAtividade;
