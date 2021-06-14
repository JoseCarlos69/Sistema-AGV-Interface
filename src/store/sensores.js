import createAsyncSlice from './util/createAsyncSlice';
import { getSensores } from '../api';

const slice = createAsyncSlice({
    name: 'sensores',
    fetchConfig: () => getSensores()
});

export const fetchSensores = slice.asyncActions;

export default slice.reducer;
