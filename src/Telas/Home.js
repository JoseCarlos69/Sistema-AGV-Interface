import React from 'react';
import Head  from '../Componentes/Util/Head';
import TituloPagina from '../Componentes/Util/TituloPagina';
import SessaoAtividades from '../Componentes/SessaoAtividades';

const Home = () => {
    return (
        <>
            <Head
                title="Home"
                description="Vejo as informações mais recentes do robô, como a localização, estado e as ocorrências recentes."
            />

            <section className="animarEntradaSessao">
                <TituloPagina>Sistema supervisório</TituloPagina>

                <SessaoAtividades />
            </section>
        </>
    );
};

export default Home;
