import { EChartsOption, SetOptionOpts } from "echarts";
import { CSSProperties } from "react";
import { LiquidFillGaugeOption } from "../utils/echarts";

export interface RegionsState {
   regionsData: CurrentDataProps[] | [];
   loading: boolean;
   selectTab: {
      label: string;
      number: number;
   };
   numPage: number
}
export interface ChangeTabProps {
   label: string,
   number: number
}
export interface PaginatorProps {
   dataLength: number,
   quantityElements: number,
   dispatchActionPaginator: (item: number) => void
}
export interface CurrentDataProps {
   data: IRegion[] | [],
   region: string,
}

export interface IRegion {
   cca2: string;
   population: number;
}

export interface GetRegionsState {
   regionsArray: string[];
   options: {};
}

export interface ReactEChartsProps {
   option: EChartsOption | LiquidFillGaugeOption;
   style?: CSSProperties;
   settings?: SetOptionOpts;
   loading?: boolean;
   theme?: "light" | "dark";
}

export interface PieChartsProps {
   title: string;
   data: any
   style?: CSSProperties;
}