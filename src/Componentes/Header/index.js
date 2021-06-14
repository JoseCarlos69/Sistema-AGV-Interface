import React from 'react';
import estilos from './index.module.css'
import StatusHeader from './StatusHeader';
import VelocidadeHeader from './VelocidadeHeader';
// Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchStatus } from '../../store/status';
// API
import { getStatus } from '../../api';

const Header = () => {
    // Redux
    const { loading, erro, status } = useSelector((state) => state.status );
    const dispatch = useDispatch();

    React.useEffect(() => {
        const fetchConfig = getStatus();

        dispatch(fetchStatus(fetchConfig));

        const intervalo = setInterval(() => {
            dispatch(fetchStatus(fetchConfig));
        }, 5 * 1000);

        return () => clearInterval(intervalo);
    }, [dispatch]);

    if (loading && !status) {
        return (
            <header className={estilos.Header}>Carregando...</header>
        );
    }

    if (erro) {
        return (
            <header className={estilos.Header}>Erro...</header>
        );
    }

    if (status) {
        return (
            <header className={estilos.Header}>
                <StatusHeader />
                <VelocidadeHeader />
            </header>
        );
    }

    return null;
};

export default Header;
