import React from 'react';
import IconeBateria from '../../Assets/iconeBateria';
import estilos from './index.module.css';
import IconeAtivo from '../../Assets/iconeAtivo';
const StatusRota = () => {
    return (
        <>
        <p className={estilos.StatusRota}>
        <IconeAtivo/>
           Ativo à 2 horas e 23 minutos
        </p>
        <p className={estilos.BateriaHeader}>
            <IconeBateria/>
           90%
        </p>
        </>
    );
};

export default StatusRota;
