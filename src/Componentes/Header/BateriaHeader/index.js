import React from 'react';
import estilos from './index.module.css';

const BateriaHeader = ({ bateria }) => {
    return (
        <div className={estilos.BateriaHeader}>
            <span
                className={`${bateria > 20 ? estilos.verde : estilos.vermelho}`}
                style={{
                    background: `linear-gradient(90deg, currentColor, ${bateria}%, transparent ${bateria}%)`
                }}
            ></span>
            {bateria}%
        </div>
    );
};

export default BateriaHeader;
