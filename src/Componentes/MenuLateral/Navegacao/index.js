import React from 'react';
import estilos from './index.module.css';
import { NavLink } from 'react-router-dom';
import IconeHome from '../../../Assets/IconeHome';
import IconeRegistros from '../../../Assets/IconeRegistros';
import IconeHistoricos from '../../../Assets/IconeHistoricos';

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