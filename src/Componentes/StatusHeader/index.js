import React from 'react';
import estilos from './index.module.css';

const StatusHeader = () => {
    return (
        <p className={estilos.StatusHeader}>
            Sem informação no momento.
        </p>
    );
};

export default StatusHeader;
