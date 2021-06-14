import React from 'react';
import estilos from './icone.module.css';

const IconeBateria = () => {
    return (
        <svg className={estilos.svg} width="51" height="28" viewBox="0 0 51 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="46.5" height="28" rx="5" fill="#394159"/>
            <rect x="36" y="4" width="15" height="20" rx="5" fill="#394159"/>
            <rect x="38" y="6" width="11" height="16" rx="5" fill="#B2FFE3"/>
            <rect x="2" y="2" width="42.5" height="24" rx="5" fill="#B2FFE3"/>
        </svg>
    );
};

export default IconeBateria;
