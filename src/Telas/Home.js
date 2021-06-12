import React from 'react';
import Head  from '../Componentes/Util/Head';
import TituloPagina from '../Componentes/Util/TituloPagina';
import SessaoTela from '../Componentes/Util/SessaoTela';
import CardAtividade from '../Componentes/CardAtividade';

const Home = () => {
    return (
        <>
            <Head
                title="Home"
                description="Vejo as informações mais recentes do robô, como a localização, estado e as ocorrências recentes."
            />

            <section className="animarEntradaSessao">
                <TituloPagina>Sistema supervisório</TituloPagina>

                <SessaoTela titulo="Atividades">
                    <CardAtividade
                        status="inativo"
                        sensor="Senso A"
                        condicao="neutra"
                        descricao="Sem ocorrências"
                    />
                </SessaoTela>
            </section>
        </>
    );
};

export default Home;
