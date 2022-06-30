import React, { useContext } from 'react'
import {Topuser} from './User'


export default function TopUser() {
    const topUser =useContext(Topuser)
  return (
    <div>
      {console.log("Data from",topUser)}
    </div>
  )
}
