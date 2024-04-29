import React from 'react'
import {Outlet} from "react-router-dom"
import Header from "./Header"
import styles from "./components.module.css"

export default function MainLayout(){
    
    return (
        <>
            <Header/>
            <h1>This is the main layout</h1>
            <Outlet/>
        </>
    )
}