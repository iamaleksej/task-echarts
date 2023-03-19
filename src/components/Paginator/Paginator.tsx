import styles from './Paginator.module.sass'
import imgFrameSelected from '../../assets/images/frame-selected.svg'
import imgFrame from '../../assets/images/frame.svg'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PaginatorProps } from '../../types';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';



const Paginator = ({ dataLength, quantityElements, dispatchActionPaginator }: PaginatorProps) => {
   const { numPage } = useTypedSelector((state) => state.regions);

   let indexArray: number[] = []
   const createIndexArray = () => {
      for (let i = 1; i <= Math.ceil(dataLength / quantityElements); i++) {
         indexArray.push(i)
      }
   }
   createIndexArray()

   return (
      <div className={styles.paginator}>
         {indexArray.map((itemIndex: number) => {
            return (
               <div
                  className={styles.item}
                  key={`numPage${itemIndex}`}
                  onClick={() => dispatchActionPaginator(itemIndex)}
               >
                  <img src={numPage === itemIndex
                     ? imgFrameSelected
                     : imgFrame}
                     alt="frame"
                     className={styles.imgFrame}
                  />
                  <span className={numPage === itemIndex
                     ? `${styles.numPage} color_creme`
                     : styles.numPage}>{itemIndex}</span>
               </div>
            )
         })}
      </div>
   )
}

export default Paginator