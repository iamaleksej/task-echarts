import { createAction } from "@reduxjs/toolkit";
import { ChangeTabProps } from "../types";

export const changeTab = createAction<ChangeTabProps>('regions/changeTab')