"use client"
import React, { useState, useEffect } from 'react'
import { isLogin, logOut, setCookie } from '@/utils/auth'
import Title from './Title'
import Link from "next/link"

const Navbar = () => {
  const [user, setUser] = useState({username: "", email: ""})

  useEffect(() => {
    const authenticate = async() => {
      const loggedIn = await isLogin()

      console.log("loggedIn", loggedIn)

      if(loggedIn.data.auth){
        setUser(loggedIn.data.data)
        console.log("USer", user)
        setCookie("userId", loggedIn.data.data._id)
        
      } 
      else{
        window.location.href = "/Login";
      }
    }
    authenticate()
    }, [])

    // console.log("USer", user)
    
    const handleLogout = () => {
        logOut()
        alert("Logged out Successfully")
        window.location.href ="/Login"
  }

  return (
    <div className="d-flex">
      <div>
      <Title title = {user.username + "'s ToDo"} />
      </div>
    <div className="ms-auto align-self-center">
      <ul className='d-inline-flex'>
        <Link className='text-decoration-none btn' href = "/"><li className='ms-4'>Home</li></Link>
        <Link className='text-decoration-none btn' href = "/Profile"><li className='ms-4'>Profile</li></Link>
        <li className='ms-4'>
      <button className='btn' onClick={handleLogout}>Logout</button></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
