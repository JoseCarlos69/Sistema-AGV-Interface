import React from 'react';
import estilos from './index.module.css'
import StatusHeader from './StatusHeader';
import BateriaHeader from './BateriaHeader';

const index = () => {
    return (
        <header className={estilos.Header}>
            <StatusHeader />
            <BateriaHeader bateria={19} />
        </header>
    );
};

export default index;
