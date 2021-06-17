import React from 'react';
import estilos from './index.module.css';

const FeedbackSessao = ({mensagem, classe}) => {
  return (
    <div className={estilos.FeedbackSessao}>
      <p className={`${estilos.mensagem} ${estilos[classe]}`}>{ mensagem }</p>
    </div>
    
  );
};

export default FeedbackSessao;
