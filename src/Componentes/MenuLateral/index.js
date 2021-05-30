import React from 'react';
import estilos from './index.module.css';
import BotaoMenu from './BotaoMenu';
import Navegacao from './Navegacao';
import { useLocation } from 'react-router';

const MenuLateral = () => {
    const [ menuAtivo, setMenuAtivo ] = React.useState(false);
    const { pathname } = useLocation();

    React.useEffect(() => {
        setMenuAtivo(false);
    }, [pathname]);

    return (
        <aside className={`${estilos.MenuLateral} ${menuAtivo ? estilos.ativo : ''}`}>
            <div className={estilos.conteudo}>
                <BotaoMenu menuAtivo={ menuAtivo } setMenuAtivo={ setMenuAtivo } />
                { menuAtivo && <Navegacao /> }
            </div>
        </aside>
    );
};

export default MenuLateral;
