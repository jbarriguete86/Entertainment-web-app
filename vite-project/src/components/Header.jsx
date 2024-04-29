import React from "react"
import styles from "./components.module.css"
import logoImg from "../assets/logo.svg"
import homeImg from "../assets/icon-nav-home.svg"
import movieImg from "../assets/icon-nav-movies.svg"
import tvImg from "../assets/icon-nav-tv-series.svg"
import bookmarkImg from "../assets/icon-nav-bookmark.svg"
import avatar from "../assets/image-avatar.png"
export default function Header(){
    return (
        <div className={styles.header_container}>
            <img src={logoImg} alt ="image of the app logo"/>   
            <div className={styles.nav_container}>
            <img src={homeImg} alt ="image of the home icon"/>
                <img src={movieImg} alt ="image of the movie icon"/>
                <img src={tvImg} alt ="image of the tv and series icon"/>
                <img src={bookmarkImg} alt ="image of the bookmark icon"/>
            </div>    
            <img src={avatar} alt ="image of the avatar"/>
        </div>
    )
}