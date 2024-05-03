import React, {useState, useEffect} from "react"
import Data from "../data.json"
import styles from "../App.module.css"
import movieLogo from "../assets/icon-category-movie.svg"
import seriesLogo from "../assets/icon-category-tv.svg"
import notBookmarked from "../assets/icon-bookmark-empty.svg"
import bookmarked from "../assets/icon-bookmark-full.svg"
import Trending from "../components/Trending"

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
        const image = thumbnail.regular.small
       return (
        <div key={title}>
        <img className={styles.main_image} src={image} alt="image of the movie"/>
        <div className={styles.elements_container}>
            <img src={isBookmarked ? bookmarked : notBookmarked} alt="bookmark logo"/>
            <div className={styles.element_inner_container}>
                <p>{year}</p>
                <p>
                <span><img src={category === "Movie" ? movieLogo : seriesLogo } alt="logo of the category"/></span>
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
        <Trending/>
        {data && items }
        </>
    )
}