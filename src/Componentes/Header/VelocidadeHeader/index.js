import React from 'react';
import estilos from './index.module.css';
import IconeVelocidade from '../../../Assets/iconeVelocidade';

const VelocidadeHeader = () => {
    return (
        <p className={estilos.VelocidadeHeader}>
            <IconeVelocidade />
            <span>Velocidade</span>30cm/s
        </p>
    );
};

export default VelocidadeHeader;
