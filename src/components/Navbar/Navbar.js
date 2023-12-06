import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="container">
      <Link href="/" className="text-decoration-none">
      <h2 className=" my-3 text-dark">MyToDo</h2>
      </Link>
    </div>
  )
}

export default Navbar
