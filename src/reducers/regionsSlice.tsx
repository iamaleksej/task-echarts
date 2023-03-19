import { createSlice } from "@reduxjs/toolkit";
import { getRegions } from "../services/api/apiRegionsSlice"
import { RegionsState } from "../types";

export const regionsSlice = createSlice({
   name: "regions",
   initialState: {
      regionsData: [],
      loading: true,
      selectTab: {
         label: '1x3',
         number: 3
      },
      numPage: 1
   } as RegionsState,
   reducers: {
      changeTab(state, { payload }) {
         state.selectTab = payload
      },
      changeNumPage(state, { payload }) {
         state.numPage = payload
      },

   },
   extraReducers: builder => {
      builder.addCase(getRegions.pending, (state) => {
         state.loading = true;
      })
      builder.addCase(getRegions.fulfilled, (state, { payload }: any) => {
         state.loading = false;
         state.regionsData = payload;
      })
      builder.addCase(getRegions.rejected, (state) => {
         state.loading = false;
      })
   }
});

export default regionsSlice.reducer