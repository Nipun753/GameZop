import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import {TopUser,SetTopUser} from '../index'
export default function TopUserPage() {
    const topUser=useContext(TopUser);
     const setTopUser =useContext(SetTopUser)
  return (
     <>
    <h1 style={{marginLeft:"300px",width:"70%"}} className='text-black text-center mb-3'>Top Users</h1>
    <Table className=' new ' style={{marginLeft:"300px",width:"70%"}} striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Remove Top User</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {topUser&&topUser.map((sin, idx) => (
                        <tr key={idx}>
                            <td>{sin.id} </td>
                            <td>{sin.name} </td>
                            <td>{sin.username}</td>
                            <td>{sin.email}</td>
                            <td><input type='checkbox' checked={false} onChange={(e) =>{
                                if(e.target.checked===true){               
                                    (topUser.splice(idx,1))
                                    setTopUser([...topUser])
                                }
                            }} ></input></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    </>
  )
}
