import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Telas/Home';
import Registros from './Telas/Registros';
import Historicos from './Telas/Historicos';
import HistoricosTabela from './Telas/HistoricosTabela';

const Rotas = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registros" element={<Registros />} />
        <Route path="/historicos" element={<Historicos />} />
        <Route path="/historicos/:data" element={<HistoricosTabela />} />
      </Routes>
    </main>
  );
};

export default Rotas;
