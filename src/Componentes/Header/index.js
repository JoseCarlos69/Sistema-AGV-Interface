import React from 'react';
import estilos from './index.module.css'
import StatusHeader from './StatusHeader';
import VelocidadeHeader from './VelocidadeHeader';
// Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchStatus } from '../../store/status';

const Header = () => {
    // Redux
    const { loading, erro, dados } = useSelector((state) => state.status );
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchStatus());

        const intervalo = setInterval(() => {
            dispatch(fetchStatus());
        }, 5 * 1000);

        return () => clearInterval(intervalo);
    }, [dispatch]);

    if (loading) {
        return (
            <header className={estilos.Header}>Carregando...</header>
        );
    }

    if (erro) {
        return (
            <header className={estilos.Header}>Erro...</header>
        );
    }

    if (dados) {
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
