import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import {TopUser,SetTopUser} from '../index'
export default function TopUserPage() {
    const topUser=useContext(TopUser)
  return (
    <>
    <h1 className='text-black'>Top Users</h1>
    <Table className=' new ' style={{marginLeft:"300px",width:"70%"}} striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Username</th>
                        <th>Email</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {topUser&&topUser.map((sin, idx) => (
                        <tr key={idx}>
                            <td>{sin.id} </td>
                            <td>{sin.name} </td>
                            <td>{sin.username}</td>
                            <td>{sin.email}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
    </>
  )
}
