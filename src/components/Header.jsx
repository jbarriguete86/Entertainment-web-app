import React, {useState, useEffect} from "react"
import { NavLink, useLocation } from "react-router-dom"
import styles from "./components.module.css"
import logoImg from "../../public/assets/logo.svg"
import homeImg from "../../public/assets/icon-nav-home.svg"
import movieImg from "../../public/assets/icon-nav-movies.svg"
import tvImg from "../../public/assets/icon-nav-tv-series.svg"
import bookmarkImg from "../../public/assets/icon-nav-bookmark.svg"
import avatar from "../../public/assets/image-avatar.png"

export default function Header(){
    const [page, setPage]=useState()
    const location= useLocation()

    useEffect(()=>{
        setPage(location.pathname)
    },[location])

    
    const activeStyles = {
        filter: "brightness(0) saturate(0) invert(100%)",
    }
    
    return (
        <div className={styles.header_container}>
            <img src={logoImg} alt ="image of the app logo"/>   
            
            <div className={styles.nav_container}>
                <NavLink
                to="."
                end
                >
                    <img src={homeImg} 
                    alt ="image of the home icon"
                    style={page === "/" ? activeStyles : null}
                    />
                </NavLink>

                <NavLink
                to="/movies"
                >
                    <img src={movieImg} alt ="image of the movie icon"
                    style={page === "/movies" ? activeStyles : null}/>
                </NavLink>

                <NavLink
                to="series"
                >
                    <img src={tvImg} alt ="image of the tv and series icon"
                    style={page === "/series" ? activeStyles : null}/>
                </NavLink>

                <NavLink
                to="/bookmark"
                >
                    <img src={bookmarkImg} alt ="image of the bookmark icon"
                    style={page === "/bookmark" ? activeStyles : null}/>
                </NavLink>
            </div>    
            <img src={avatar} alt ="image of the avatar"/>
        </div>
    )
}