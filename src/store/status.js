import createAsyncSlice from './util/createAsyncSlice';
import { getStatus } from '../api';

const slice = createAsyncSlice({
    name: 'status',
    fetchConfig: () => getStatus()
});

export const fetchStatus = slice.asyncActions;

export default slice.reducer;
