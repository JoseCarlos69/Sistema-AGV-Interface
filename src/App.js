import React from 'react';
import './App.css';
import Rotas from './Rotas';
import MenuLateral from './Componentes/MenuLateral';

const App = () => {
  const [menuAtivo, setMenuAtivo] = React.useState(false);

  return (
    <>
      <MenuLateral ativo={menuAtivo} setAtivo={setMenuAtivo}/>
      <Rotas />
    </>
  );
};

export default App;
