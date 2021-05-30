import React from 'react';
import Head  from '../Componentes/Util/Head';
import TituloPagina from '../Componentes/TituloPagina';

const Registros = () => {
    return (
        <>
            <Head
                title="Registros"
                description="Veja o resumo dos dados coletados nos últimos 4 dias ou meses."
            />

            <section className="animarEntradaSessao">
                <TituloPagina>Registros</TituloPagina>
            </section>
        </>
    );
};

export default Registros;
