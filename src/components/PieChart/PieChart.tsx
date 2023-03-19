import EChartsWrapper from "../EChartsWrapper";
import { IRegion, PieChartsProps, ReactEChartsProps } from "../../types";



export default function PieCharts({ style, title, data }: PieChartsProps): JSX.Element {
   let minValue = 9999999
   let maxValue = 0
   const dataChart = data.map((item: IRegion) => {
      if (item.population > maxValue) maxValue = item.population / 1000
      if (item.population < minValue) minValue = item.population / 1000

      return (
         { value: item.population / 1000, name: item.cca2 }
      )
   })

   const option: ReactEChartsProps["option"] = {
      title: {
         text: title,
         left: 'center',
         top: 20,
         textStyle: {
            color: '#ccc'
         }
      },
      tooltip: {
         trigger: 'item'
      },
      visualMap: {
         show: false,
         min: minValue,
         max: maxValue,
         inRange: {
            colorLightness: [0, .3]
         }
      },
      series: [
         {
            name: 'Population (тыс.)',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            data: dataChart.sort(function (a: { value: number }, b: { value: number }) {
               return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
               color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
               lineStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
               },
               smooth: 0.2,
               length: 10,
               length2: 20
            },
            itemStyle: {
               color: '#c23531',
               shadowBlur: 200,
               shadowColor: 'rgba(0, 0, 0, 0)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx: number) {
               return Math.random() * 200;
            }
         }
      ]
   }

   return (
      <EChartsWrapper
         option={option}
         style={style}
      />
   );
}