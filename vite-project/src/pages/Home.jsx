import React, {useState, useEffect} from "react"
import Data from "../data.json"
import styles from "../App.module.css"
import movieLogo from "../assets/icon-category-movie.svg"
import seriesLogo from "../assets/icon-category-tv.svg"

export default function Home(){
const [data, setData] = useState()

useEffect(()=>{
    getData()
}, [Data])

    function getData(){
        setData(Data)
    }

    const items= data && data.map(element =>{
       const {title, thumbnail, year, category, rating, isBookmarked, isTrending} = element
        
       return (
        <div key={title}>
        <img src={thumbnail.regular.small} alt="image of the movie"/>
        <div className={styles.elements_container}>
            <div className={styles.element_inner_container}>
                <p>{year}</p>
                <p>
                <span><img src={category === "movie" ? movieLogo : seriesLogo } alt="logo of the category"/></span>
                {category}
                </p>
                <p>{rating}</p>
            </div>
            <p>{title}</p>
        </div>
        </div>
        )
    })


    return (
        <>
        {data && items }
        </>
    )
}