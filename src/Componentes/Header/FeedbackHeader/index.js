import React from 'react';
import estilos from "./index.module.css";

const FeedbackHeader = ({ loading, erro }) => {
    if (loading) return (
        <span className={`${estilos.FeedbackHeader} ${estilos.loading}`}>
            Buscando dados...
        </span>
    );

    if (erro) return (
        <span className={`${estilos.FeedbackHeader} ${estilos.erro}`}>
            { erro }
        </span>
    );

    return null;
};

export default FeedbackHeader;
