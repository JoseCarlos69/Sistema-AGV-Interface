import React from 'react';
import estilos from './index.module.css';

// Children é tudo que você passa dentro da tag <SessaoTela>children</SessaoTela>
// classes é pra caso a gente queira passar alguma classe diferente pra section.
// titulo é o conteúdo do que vai ficar no título da sessão.
const SessaoTela = ({ classes, titulo, children }) => {
    return (
        <section className={`${estilos.SessaoTela} ${classes}`}>
            <h2>{ titulo }</h2>

            { children }
        </section>
    );
};

export default SessaoTela;
