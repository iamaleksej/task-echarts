import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeNumPage } from '../../actions/changeNumPage';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getRegions } from '../../services/api/apiRegionsSlice';
import { AppDispatch } from '../../store';
import { CurrentDataProps } from '../../types';
import Loader from '../Loader';
import Paginator from '../Paginator';
import PieChart from '../PieChart';
import styles from './HomePage.module.sass'

const HomePage = () => {

   const { regionsData, loading, selectTab, numPage } = useTypedSelector((state) => state.regions);
   const dispatch = useDispatch<AppDispatch>()
   const regionsArray = ['Oceania', 'Americas', 'Europe', 'Asia', 'Africa']

   useEffect(() => {
      const controller = new AbortController()
      const { signal } = controller
      dispatch(getRegions({ regionsArray, options: { signal } }))
      return () => controller.abort()
   }, [])

   let currentData: CurrentDataProps[] | []
   if (selectTab.label === '1x3') {
      if (numPage === 1) {
         currentData = regionsData?.slice(0, selectTab.number)
      } else {
         const currentIndex = (numPage - 1) * 3
         currentData = regionsData?.slice(currentIndex, currentIndex + selectTab.number)
      }
   } else {
      currentData = regionsData
   }

   const dispatchActionPaginator = (indexPage: number) => {
      dispatch(changeNumPage(indexPage))
   }

   return (
      <div className={styles.wrapper}>
         <div className={`${styles.container} container`}>
            {loading && <Loader />}
            {!loading && (
               <>
                  <div className={selectTab.label === 'smart'
                     ? `${styles.chartsSmart} ${styles.charts}`
                     : styles.charts}>
                     {currentData?.map((item) => {
                        return (
                           <div className={selectTab.label === 'smart'
                              ? `${styles.chartSmart} ${styles.chart}`
                              : styles.chart}

                              key={item.region}>
                              <PieChart
                                 title={item.region}
                                 data={item.data}
                              />
                           </div>
                        )
                     })}
                  </div>
                  {selectTab.label === '1x3' ?
                     <Paginator
                        dataLength={regionsData?.length}
                        quantityElements={selectTab.number}
                        dispatchActionPaginator={dispatchActionPaginator}
                     />
                     : ''}
               </>
            )}
         </div>
      </div>
   )
}

export default HomePage