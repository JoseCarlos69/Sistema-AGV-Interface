import React from 'react';
import Head  from '../Componentes/Util/Head';
import TituloPagina from '../Componentes/Util/TituloPagina';

const Históricos = () => {
    return (
        <>
            <Head
                title="Históricos"
                description="Tenha acesso a tudo que foi registrado na última semana ou no último semestre."
            />

            <section className="animarEntradaSessao">
                <TituloPagina>Históricos</TituloPagina>
            </section>
        </>
    );
};

export default Históricos;
