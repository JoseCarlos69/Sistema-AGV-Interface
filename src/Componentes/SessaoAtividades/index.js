import React from 'react';
import SessaoTela from '../Util/SessaoTela';
import CardAtividade from './CardAtividade';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchSensores } from '../../store/sensores';

const SessaoAtividades = () => {
    // Redux
    const { loading, erro, dados } = useSelector((state) => state.sensores);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchSensores());

        const intervalo = setInterval(() => {
            dispatch(fetchSensores());
        }, 5 * 1000);

        return () => clearInterval(intervalo);
    }, [dispatch]);

    if (loading) return <SessaoTela titulo="Carregando atividades"></SessaoTela>;

    if (erro) return <SessaoTela titulo="Erro ao buscar atividades"></SessaoTela>;

    if (dados) {
        return (
            <SessaoTela titulo="Atividades">
                { dados.map(({ status, sensor, condicao, descricao }) => (
                    <CardAtividade
                        key={sensor}
                        status={status}
                        sensor={sensor}
                        condicao={condicao}
                        descricao={descricao}
                    />
                )) }
            </SessaoTela>
        );
    }

    return null;
};

export default SessaoAtividades;
