
import News from './News'
import 'bootstrap/dist/css/bootstrap.css'
import User from './User'
import Header from './Components/Header'
import LeftNavbar from './Components/LeftNav'
import Content from './Components/Content'
import Link from "next/link"
import { createContext, useState } from 'react'

export const TopUser = createContext();

export const SetTopUser = createContext();
export default function Home() {
const [topUser,setTopUser] = useState([])
  
  return (
    <>
     <TopUser.Provider value={topUser}>
      <SetTopUser.Provider value={setTopUser}>
    <Header/>
    <LeftNavbar/>
    <Content/>
    </SetTopUser.Provider>
    </TopUser.Provider>
    </>
  )
}
