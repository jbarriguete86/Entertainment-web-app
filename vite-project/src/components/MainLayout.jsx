import React from 'react'
import {Outlet} from "react-router-dom"
import Header from "./Header"
import styles from "./components.module.css"

export default function MainLayout(){
    
    return (
        <div className={styles.site_wrapper}>
            <Header/>
            <Outlet/>
        </div>
    )
}