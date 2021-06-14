import { createSlice } from '@reduxjs/toolkit';
import { getStorage, setStorage } from '../util/storage';

const keyStorage = 'status';

const slice = createSlice({
    name: 'status',
    initialState: {
        status: getStorage(keyStorage, null),
        loading: null,
        erro: null
    },
    reducers: {
        atualizarStatus(state, action) {
            setStorage(keyStorage, action.payload);
            state.status = action.payload;
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
    atualizarStatus,
    atualizarLoading,
    atualizarErro
} = slice.actions;

export const fetchStatus = ({ url, options }) => async (dispatch) => {
    try {
        dispatch(atualizarErro(null));
        dispatch(atualizarLoading(true));

        const res = await fetch(url, options);
        const json = await res.json();

        if (!res.ok) throw new Error(json.mensagem);

        dispatch(atualizarStatus(json));
    } catch({ message }) {
        dispatch(atualizarStatus(null));
        dispatch(atualizarErro(message));
    } finally {
        dispatch(atualizarLoading(false));
    }
};

export default slice.reducer;
