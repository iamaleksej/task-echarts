import { Link } from "react-router-dom"
import imgGlobus from '../../assets/images/globus.svg'
import imgHeart from '../../assets/images/heart.svg'
import imgHeartSelected from '../../assets/images/heart-selected.svg'
import styles from './Header.module.sass'
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { changeTab } from "../../actions/changeTab"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"


const Header = () => {
   const { selectTab } = useTypedSelector((state) => state.regions);
   const dispatch = useDispatch<AppDispatch>()

   const tabs = [
      { label: '1x3', number: 3 },
      { label: '2x3', number: 5 },
      { label: 'smart', number: 5 },
   ]

   const activeTabHandler = (label: string, number: number) => {
      dispatch(changeTab({ label: label, number: number }))
   }

   return (
      <header className={styles.wrapper}>
         <div className="container">
            <div className={styles.header}>
               <div className={styles.logo}>
                  <Link to='./'>
                     World's&nbsp;
                     <span className="color_creme">
                        Population&nbsp;
                        <img src={imgGlobus} alt="globus" />
                     </span>
                  </Link>
               </div>
               <nav className={styles.nav}>
                  {tabs.map((item: { label: string, number: number }) => {
                     return (
                        <div
                           key={item.label}
                           className={selectTab.label === item.label
                              ? `${styles.navItem} active`
                              : styles.navItem}
                           onClick={() => activeTabHandler(item.label, item.number)}
                        >
                           <img
                              src={selectTab.label === item.label
                                 ? imgHeartSelected
                                 : imgHeart}
                              alt="heart"
                              className={styles.heart}
                           />
                           <p>{item.label}</p>
                           <div className="activeLine"></div>
                        </div>
                     )
                  })}
               </nav>
            </div>
         </div>
      </header >
   )

}
export default Header