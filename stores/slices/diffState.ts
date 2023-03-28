import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from 'stores';

export interface NavState {
  homepage: boolean
}

const initialState: NavState = {
  homepage: false
}

export const stateReducer = createSlice({
  name: 'state',
  initialState,
  reducers: {
    changeHomepage: (state, action: PayloadAction<boolean>) => {
      state.homepage = action.payload
    }
  },

  extraReducers: {
    [HYDRATE]: (state: NavState, action: any) => {
      return {
        ...state,
        ...action.payload.state,
      };
    }
  },
})

export const { changeHomepage } = stateReducer.actions

export const selectAllState = (state: AppState) => state.state;

export default stateReducer.reducer