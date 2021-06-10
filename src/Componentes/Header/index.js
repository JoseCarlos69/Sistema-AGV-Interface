import React from 'react';
import estilos from './index.module.css'
import StatusHeader from './StatusHeader';
import VelocidadeHeader from './VelocidadeHeader';

const index = () => {
    return (
        <header className={estilos.Header}>
            <StatusHeader />
            <VelocidadeHeader />
        </header>
    );
};

export default index;
