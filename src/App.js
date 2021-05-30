import React from 'react';
import './App.css';
import Header from './Componentes/Header';
import MenuLateral from './Componentes/MenuLateral';
import Rotas from './Rotas';

const App = () => {
  const [menuAtivo, setMenuAtivo] = React.useState(false);

  return (
    <>
      <Header />
      <MenuLateral ativo={menuAtivo} setAtivo={setMenuAtivo}/>
      <Rotas />
    </>
  );
};

export default App;
