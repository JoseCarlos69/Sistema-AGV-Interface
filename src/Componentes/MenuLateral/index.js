import React from 'react'
import estilos from './index.module.css';
import BotaoMenu from '../BotaoMenu'

const MenuLateral = () => {
    const [ menuAtivo, setMenuAtivo ] = React.useState(false);

    return (
        <aside className={estilos.MenuLateral}>
            <BotaoMenu menuAtivo={ menuAtivo } setMenuAtivo={ setMenuAtivo } />
        </aside>
    );
};

export default MenuLateral;
