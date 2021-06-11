import React from 'react';
import CardAtividade from '../Componentes/CardAtividade';
import Head  from '../Componentes/Util/Head';
import TituloPagina from '../Componentes/Util/TituloPagina';

const Home = () => {
    return (
        <>
            <Head
                title="Home"
                description="Vejo as informações mais recentes do robô, como a localização, estado e as ocorrências recentes."
            />

            <section className="animarEntradaSessao">
                <TituloPagina>Sistema supervisório</TituloPagina>

                <CardAtividade status="ativo" sensor="sensor 1" condicao="positiva" descricao="Sem ocorrências" />
            </section>
        </>
    );
};

export default Home;
