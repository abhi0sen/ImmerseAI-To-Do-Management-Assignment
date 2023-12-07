import React from 'react'
import Link from "next/link"


const Title = (props) => {
  return (
    <div className="">
      <Link href="/" className="text-decoration-none">
      <h2 className=" my-3 text-dark">{props.title}</h2>
      </Link>
    </div>
  )
}

export default Title;