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
        </SessaoTela>
    );
};

export default SessaoAtividades;
