import React, {useEffect, useState} from "react"
import Data from "../data.json"
import movieLogo from "../assets/icon-category-movie.svg"
import seriesLogo from "../assets/icon-category-tv.svg"
import notBookmarked from "../assets/icon-bookmark-empty.svg"
import bookmarked from "../assets/icon-bookmark-full.svg"
import searchIcon from "../assets/icon-search.svg"
import styles from "../App.module.css"

export default function Movies(){
    const [data, setData] = useState()

    useEffect(()=>{
        getData()
    }, [Data])
    
    function getData(){
        const newData=Data.filter(dat => dat.isBookmarked)
        console.log(newData)
        setData(newData)
    }
    
        function handleBookmark(index){
            const newData = data[index]
            const updateData = {...newData, isBookmarked:!newData.isBookmarked}
            setData(prevData=>{
                const newDataArr = [...prevData]
                newDataArr[index] = updateData
                return newDataArr
                })
        }
    
        const items= data && data.map((element,index) =>{
           const {title, thumbnail, year, category, rating, isBookmarked, isTrending} = element
            const image = thumbnail.regular.small
           return (
            <div className={styles.movie_container} key={title}>
                <img className={styles.main_image} src={image} alt="image of the movie"/>
                <div onClick={()=>handleBookmark(index)} className={styles.bookmark_logo}>
                    <img  src={isBookmarked ? bookmarked : notBookmarked} alt="bookmark logo"/>
                </div>
                <div className={styles.elements_container}>
                    <div className={styles.inner_container}>
                        <p>{year}</p>
                        <div className={styles.dot} >
                            <p>.</p>
                        </div>
                        <p>
                        <span><img src={category === "Movie" ? movieLogo : seriesLogo } alt="logo of the category"/></span>
                        {category}
                        </p>
                        <div className={styles.dot} >
                            <p>.</p>
                        </div>
                        <p>{rating}</p>
    
                    </div>
                </div>
                    <p>{title}</p>
            </div>
            )
        })
    
    
        return (
            <div className={styles.site_wrapper}>
            <div className={styles.search_container}>
                <img src={searchIcon} alt="images of the magnifier"/>
                <textarea className={styles.search} placeholder="Search for bookmarked shows"/>
            </div>
            <div className={styles.main_container}>
                <p>Bookmarked Movies</p>
                <div className={styles.main_inner}>
                    {data && items }
                </div>
            </div>
            </div>
        )
    }