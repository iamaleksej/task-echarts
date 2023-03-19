import { configureStore } from "@reduxjs/toolkit";
import regionsReducer from './reducers/regionsSlice'


export const store = configureStore({
   reducer: {
      regions: regionsReducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch