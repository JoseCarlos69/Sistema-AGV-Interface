import React from 'react';
import estilos from './index.module.css';
import { NavLink } from 'react-router-dom';
import IconeHome from '../../Assets/iconeHome.svg';
import IconeRegistros from '../../Assets/iconeRegistros.svg';
import IconeHistoricos from '../../Assets/iconeHistoricos.svg';

const Navegacao = () => {
    return (
        <nav className={estilos.Navegacao}>
            <ul>
                <li>
                    <NavLink to="/" activeClassName={estilos.ativo} end>
                        <div className={estilos.iconeContainer}>
                            <img src={IconeHome} alt="Ícone da página Home." />
                        </div>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/Registros" activeClassName={estilos.ativo} end>
                        <div className={estilos.iconeContainer}>
                            <img src={IconeRegistros} alt="Ícone da página Home." />
                        </div>
                        Registros
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/Historicos" activeClassName={estilos.ativo} end>
                        <div className={estilos.iconeContainer}>
                            <img src={IconeHistoricos} alt="Ícone da página Home." />
                        </div>
                        Historicos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navegacao;