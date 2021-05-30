import React from 'react';
import estilos from './index.module.css';

const BateriaHeader = ({ bateria }) => {
    return (
        <p className={estilos.BateriaHeader}>
            <span
                className={`${bateria > 20 ? estilos.verde : estilos.vermelho}`}
                style={{ background: `linear-gradient(90deg, currentColor, ${bateria}%, transparent ${bateria}%)` }}
            ></span>
            {bateria}%
        </p>
    );
};

export default BateriaHeader;
