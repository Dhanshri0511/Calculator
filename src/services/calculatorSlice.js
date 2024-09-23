import {  createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        value: '',
    },
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        },
        clearValue: (state) => {
            state.value = '';
        },
        backSpace: (state) => {
            state.value = state.value.slice(0, -1);
        },
        calculate: (state) => {
            try {
                state.value = String(eval(state.value));
            } catch (error) {
                state.value = 'Error';
            }
        },
    },
});

export const { setValue, clearValue, backSpace, calculate } = calculatorSlice.actions;