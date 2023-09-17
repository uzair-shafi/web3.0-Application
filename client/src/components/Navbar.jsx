import React from 'react'
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full justify-center mx-auto items-center">
    <div className="justify-center items-center mx-auto py-6">

    <img src={logo} alt="logo" className=" w-32 mx-auto justify-center items-center cursor-pointer" />
    </div>
  
    </nav>
  )
}

export default Navbar