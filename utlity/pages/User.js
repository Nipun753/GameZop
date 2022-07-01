import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap';
import {TopUser,SetTopUser} from '../pages/index'

export default function User() {
    const [searchValue,setSearchValue]=useState("")
const setTopUser =useContext(SetTopUser)
    const topUser=useContext(TopUser)
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            console.log(res.data)
            setData(res.data)
        })


    }, [])
    return (
        <>
 <div >
    <input style={{marginLeft:"300px",width:"60%"}} className='mb-3' type="text" onChange={(e)=>{
      setSearchValue(e.target.value)
    }}></input><button className='mx-4 'onClick={()=>{
        data.map((sin)=>{
            if(searchValue===sin.name || searchValue ===sin.email){
              alert(sin.name);
              alert(sin.email)            
       }
           })
    }}> Search</button>
    
            <Table className=' new ' style={{marginLeft:"300px",width:"70%"}} striped bordered hover>
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
                            <td><input type='checkbox' onChange={(e) =>{
                                if(e.target.checked===true){
                                    setTopUser(topUser => {
                                        return[
                                        ...topUser , {
                                            "name":sin.name,
                                            "id":sin.id,
                                            "email":sin.email,
                                            "username":sin.username

                                        }
                                            
                                        
                                    ]})
                                }
                            }} ></input></td>
                            <td> <input type='checkbox' onChange={(e) =>{
                                localStorage.setItem({
                                    "name":sin.name,
                                    "id":sin.id,
                                    "email":sin.email,
                                    "username":sin.username
                                });
                            }}
                             name={sin.name}></input></td>
                        </tr>
                    ))}

                </tbody>
            </Table>
            {console.log(topUser)}
 </div>
        </>
    )
}
