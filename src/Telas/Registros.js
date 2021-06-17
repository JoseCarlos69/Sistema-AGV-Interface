import React from 'react';
import Head  from '../Componentes/Util/Head';
import TituloPagina from '../Componentes/Util/TituloPagina';
import FeedbackSessao from '../Componentes/Util/FeedbackSessao';

const Registros = () => {
    return (
        <>
            <Head
                title="Registros"
                description="Veja o resumo dos dados coletados nos últimos 4 dias ou meses."
            />

            <section className="animarEntradaSessao">
                <TituloPagina>Registros</TituloPagina>
                <FeedbackSessao mensagem="Carregando" classe="carregando"/>
            </section>
        </>
    );
};

export default Registros;
