import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
function Header() {
  return (
    <>
   <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://res.cloudinary.com/dikhkks5s/image/upload/v1746592637/pngwing.com_1_vw2yau.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    </>
  )
}

export default Header
