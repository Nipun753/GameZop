import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

export const Topuser = createContext()
export default function User() {

    const [topUser, setTopUser] = useState([])
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])
    return (
        <>
            <Topuser.Provider value={topUser}>
                <div >

                    <Table className=' new ' style={{ marginLeft: "100px", width: "90%" }} striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Top User</th>
                                <th>Block</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((sin, idx) => (
                                <tr key={idx}>
                                    <td>{sin.id} </td>
                                    <td>{sin.name} </td>
                                    <td>{sin.username}</td>
                                    <td>{sin.email}</td>
                                    <td><input type='checkbox' onChange={(e) => {
                                        if (e.target.checked === true) {
                                            setTopUser(topUser => {
                                                return [...topUser, {
                                                    "email": sin.id,
                                                    "name": sin.name,
                                                    "username": sin.username
                                                }]
                                            })
                                        }
                                    }}></input></td>
                                    <td> <input type='checkbox' name={sin.name}></input></td>
                                </tr>
                            ))}
                            {console.log(topUser)}
                        </tbody>
                    </Table>

                </div>
              
            </Topuser.Provider>
        </>
    )
}