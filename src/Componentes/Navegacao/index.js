import React from 'react'
import { NavLink } from 'react-router-dom';
import estilos from './index.module.css';

const Navegacao = () => {
    return (
        <nav className={estilos.Navegacao}>
            <ul>
                <li>
                    <NavLink to="/" activeClassName={estilos.ativo} end>Home</NavLink>
                </li>

                <li>
                    <NavLink to="/Registros" activeClassName={estilos.ativo} end>Registros</NavLink>
                </li>

                <li>
                    <NavLink to="/Historicos" activeClassName={estilos.ativo} end>Historicos</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navegacao;