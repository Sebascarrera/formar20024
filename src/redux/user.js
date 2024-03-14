import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { createUser as createUserService } from '../service'

const initialState = {
    status: 'idle',
    error: null
}

export const createUser = createAsyncThunk('user/create', async (data, { rejectWithValue }) => {
    try {
        await createUserService(data)
        return { "message": "ok"}
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(createUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createUser.fulfilled, (state) => {
                state.status = 'succeded'
            })
            .addCase(createUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload ?? "General error"
            })
    }
})

export default userSlice.reducer