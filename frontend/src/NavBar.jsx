import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
      <Link to="courses">Courses</Link>
    </div>
  )
}

export default NavBar