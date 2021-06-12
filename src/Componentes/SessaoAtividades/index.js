import React from 'react';
import SessaoTela from '../Util/SessaoTela';
import CardAtividade from './CardAtividade';

const SessaoAtividades = () => {
    return (
        <SessaoTela titulo="Atividades">
            <CardAtividade
                status="inativo"
                sensor="Senso A"
                condicao="neutra"
                descricao="Sem ocorrências"
            />

            <CardAtividade
                status="ativo"
                sensor="Senso A"
                condicao="positiva"
                descricao="Sem ocorrências"
            />

            <CardAtividade
                status="ativo"
                sensor="Senso A"
                condicao="negativa"
                descricao="Ocorreu um problema"
            />
        </SessaoTela>
    );
};

export default SessaoAtividades;
