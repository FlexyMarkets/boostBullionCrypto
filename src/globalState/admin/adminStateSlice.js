import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    role: localStorage.getItem("role") || null,
    banner: localStorage.getItem("banner") || false
};

const adminStateSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload
            localStorage.setItem("role", action.payload)
        },
        setBanner: (state, action) => {
            state.banner = action.payload
            if (action.payload) {
                localStorage.setItem("banner", action.payload)
            } else {
                localStorage.removeItem("banner")
            }
        }
    }
});

export const { setRole, setBanner } = adminStateSlice.actions;
export default adminStateSlice.reducer;