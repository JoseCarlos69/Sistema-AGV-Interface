import React from 'react';
import estilos from './index.module.css';

const BotaoMenu = ({ menuAtivo, setMenuAtivo }) => {
  const menuToggle = React.useCallback(() => {
    setMenuAtivo((menuAtivo) => !menuAtivo);
  }, [setMenuAtivo]);
  
  return (
    <button
      className={`${estilos.BotaoMenu} ${(menuAtivo) ? estilos.ativo : ''}`}
      onClick={menuToggle}
      aria-label={`${(menuAtivo) ? 'Fecha' : 'Abre'} o menu de navegação`}
    > 
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  )
}

export default BotaoMenu;
