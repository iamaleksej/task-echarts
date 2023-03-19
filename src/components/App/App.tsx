import { FC } from "react"
import Header from "../Header"
import HomePage from "../HomePage"
import './App.sass'

const App: FC = () => {
   return (
      <>
         <Header />
         <HomePage />
      </>
   )
}

export default App