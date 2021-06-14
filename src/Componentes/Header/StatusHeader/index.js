import React from 'react';
import { useSelector } from 'react-redux';
import estilos from './index.module.css';

const StatusHeader = () => {
    const { dados } = useSelector((state) => state.status);

    return (
        <p className={`${estilos.StatusHeader} ${estilos[dados.status]}`}>
            {dados.status}.
        </p>
    );
};

export default StatusHeader;
