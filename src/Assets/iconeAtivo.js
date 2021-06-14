import React from 'react';
import estilos from './icone.module.css';

const IconeAtivo = () => {
    return (
        <svg className={estilos.svg} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
        <circle cx="22" cy="22" r="18" fill="#B3FFE3"/>
        </g>
        <defs>
        <filter id="filter0_d" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="3"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.75 0 0 0 0 1 0 0 0 0 0.88 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        </defs>
        </svg>
        
    );
};

export default IconeAtivo;
