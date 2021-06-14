import React from 'react';
import InfoFields from '../Componentes/LocalAtual';
import Head  from '../Componentes/Util/Head';
import TituloPagina from '../Componentes/Util/TituloPagina';

const RotaLocal = () => {
    return (
        <>
            <Head
                title="Rota e Localização"
                description=""
            />

            <section className="animarEntradaSessao">
                <TituloPagina>Rota e Localização</TituloPagina>
            </section>

            <InfoFields/>
        </>
    );
};

export default RotaLocal;
