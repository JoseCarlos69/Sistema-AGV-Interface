import React from 'react';
import estilos from './index.module.css';

const LegendaCard = ({ legenda }) => {
    return <span className={estilos.LegendaCard}>{legenda}</span>;
};

export default LegendaCard;
