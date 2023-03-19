import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetRegionsState, IRegion } from "../../types";


export const getRegions = createAsyncThunk("regions/getRegions", async ({
   regionsArray,
   options = {}
}: GetRegionsState) => {
   let newRegionsData: any[] = []

   try {
      for (let region of regionsArray) {
         const res = await fetch(
            `https://restcountries.com/v3.1/region/${region}`, options
         )

         const data = await res.json()
         const newData = data.splice(0, 10)
         let obj = {
            region: '',
            data: {}
         }

         obj['region'] = region
         obj['data'] = newData
         newRegionsData.push(obj)
      }
      return newRegionsData

   } catch (err) {
      console.log(err);
   }
});