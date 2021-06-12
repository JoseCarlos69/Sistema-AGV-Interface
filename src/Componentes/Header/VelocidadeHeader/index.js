import React from 'react';
import estilos from './index.module.css';
import IconeVelocidade from '../../../Assets/IconeVelocidade';
import useMedia from '../../../Hooks/useMedia';

const VelocidadeHeader = () => {
    const isMobile = useMedia("(max-width: 660px)");

    return (
        <p className={estilos.VelocidadeHeader}>
            <IconeVelocidade />

            { !isMobile && <span>Velocidade</span> }

            30cm/s
        </p>
    );
};

export default VelocidadeHeader;
