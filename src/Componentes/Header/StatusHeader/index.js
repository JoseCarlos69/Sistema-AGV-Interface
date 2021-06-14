import React from 'react';
import { useSelector } from 'react-redux';
import estilos from './index.module.css';

const StatusHeader = () => {
    const { status } = useSelector((state) => state.status);

    return (
        <p className={`${estilos.StatusHeader} ${estilos[status.status]}`}>
            {status.status}.
        </p>
    );
};

export default StatusHeader;
