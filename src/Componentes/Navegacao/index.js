import React from 'react';
import estilos from './index.module.css';
import { NavLink } from 'react-router-dom';
import IconeHome from '../../Assets/iconeHome';
import IconeRegistros from '../../Assets/iconeRegistros';
import IconeHistoricos from '../../Assets/iconeHistoricos';

const Navegacao = () => {
    return (
        <nav className={estilos.Navegacao}>
            <ul>
                <li>
                    <NavLink to="/" activeClassName={estilos.ativo} end>
                        <IconeHome />
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/Registros" activeClassName={estilos.ativo} end>
                        <IconeRegistros />
                        Registros
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/Historicos" activeClassName={estilos.ativo} end>
                        <IconeHistoricos />
                        Historicos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navegacao;