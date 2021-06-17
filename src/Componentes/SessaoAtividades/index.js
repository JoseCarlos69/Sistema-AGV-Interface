import React from 'react';
import SessaoTela from '../Util/SessaoTela';
import FeedbackAtividade from './FeedbackAtividade';
import CardAtividade from './CardAtividade';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchSensores } from '../../store/sensores';
// API
import { getSensores } from '../../api';

const SessaoAtividades = () => {
    // Redux
    const { loading, erro, sensores } = useSelector((state) => state.sensores);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const fetchConfig = getSensores();

        dispatch(fetchSensores(fetchConfig));

        const intervalo = setInterval(() => {
            dispatch(fetchSensores(fetchConfig));
        }, 5 * 1000);

        return () => clearInterval(intervalo);
    }, [dispatch]);

    if (!(sensores?.length > 0)) {
        return (
            <SessaoTela titulo="Atividades">
                <FeedbackAtividade erro={erro} loading={loading}/>
            </SessaoTela>
        );
    }

    return (
        <SessaoTela titulo="Atividades">
            { sensores.map(({ status, sensor, condicao, descricao }) => (
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
};

export default SessaoAtividades;
