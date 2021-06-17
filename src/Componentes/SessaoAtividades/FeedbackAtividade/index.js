import React from 'react'
import FeedbackSessao from '../../Util/FeedbackSessao'

const FeedbackAtividade = ({ erro, loading }) => {
  if (erro) return <FeedbackSessao mensagem={erro} classe="erro" />;

  if (loading) return <FeedbackSessao mensagem="Carregando" classe="carregando" />

  return (
    <FeedbackSessao
      mensagem="Ainda não coletamos dados suficientes para esta informação." 
    />
  );
};

export default FeedbackAtividade;
