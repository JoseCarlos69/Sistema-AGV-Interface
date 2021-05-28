import React from 'react'
import estilos from './index.module.css';
import BotaoMenu from '../BotaoMenu';
import Navegacao from '../Navegacao'

const MenuLateral = () => {
    const [ menuAtivo, setMenuAtivo ] = React.useState(false);

    return (
        <aside className={estilos.MenuLateral}>
            <BotaoMenu menuAtivo={ menuAtivo } setMenuAtivo={ setMenuAtivo } />
            <Navegacao/>
        </aside>
    );
};

export default MenuLateral;
