import { createSlice } from '@reduxjs/toolkit';
import { getStorage, setStorage } from '../util/storage';

const keyStorage = 'sensores';

const slice = createSlice({
    name: 'sensores',
    initialState: {
        sensores: getStorage(keyStorage, null),
        loading: null,
        erro: null
    },
    reducers: {
        atualizarSensores(state, action) {
            setStorage(keyStorage, action.payload);
            state.sensores = action.payload;
        },
        atualizarLoading(state, action) {
            state.loading = action.payload;
        },
        atualizarErro(state, action) {
            state.erro = action.payload;
        }
    }
});

export const {
    atualizarSensores,
    atualizarLoading,
    atualizarErro
} = slice.actions;

export const fetchSensores = ({ url, options }) => async (dispatch) => {
    try {
        dispatch(atualizarErro(null));
        dispatch(atualizarLoading(true));

        const res = await fetch(url, options);
        const json = await res.json();

        if (!res.ok) throw new Error(json.mensagem);

        dispatch(atualizarSensores(json));
    } catch({ message }) {
        dispatch(atualizarSensores(null));
        dispatch(atualizarErro(message));
    } finally {
        dispatch(atualizarLoading(false));
    }
};

export default slice.reducer;
