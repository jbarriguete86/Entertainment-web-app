import React, {useState, useEffect} from "react"
import styles from "./components.module.css"
import Data from "../data.json"
import movieLogo from "../../public/assets/icon-category-movie.svg"
import seriesLogo from "../../public/assets/icon-category-tv.svg"
import notBookmarked from "../../public/assets/icon-bookmark-empty.svg"
import bookmarked from "../../public/assets/icon-bookmark-full.svg"

export default function Trending(){
    const [data, setData] = useState()

    useEffect(()=>{
        getData()
    }, [Data])
    
        function handleBookmark(index){
            const newData = data[index]
            const updateData = {...newData, isBookmarked:!newData.isBookmarked}
            setData(prevData=>{
                const newDataArr = [...prevData]
                newDataArr[index] = updateData
                return newDataArr
                })
        }

        function getData(){
            const newData=Data.filter(dat => dat.isTrending)
            setData(newData)
        }

        const items= data && data.map((element, index) =>{
            const {title, thumbnail, year, category, rating, isBookmarked, isTrending} = element
             const image = thumbnail.trending.small

            return (
             <div className={styles.top_container} key={title}>
             <img className={styles.main_image} src={image} alt="image of the movie"/>
             <div className={styles.elements_container}>
                 <p onClick={()=>handleBookmark(index)} id={index} className={styles.bookmark_img}>
                    <img src={isBookmarked ? bookmarked : notBookmarked} alt="bookmark logo"/>
                </p>
                 <div className={styles.element_inner_container}>
                     <p>{year}</p>
                     <p className={styles.separator}>.</p>
                     <p className={styles.cat_text}>
                     <span><img src={category === "Movie" ? movieLogo : seriesLogo } alt="logo of the category"/></span>
                     {category}
                     </p>
                     <p className={styles.separator}>.</p>
                     <p>{rating}</p>
                 </div>
                 <p>{title}</p>
             </div>
             </div>
             )
         })

    return (
        <div className={styles.trend_container}>
            <p>Trending</p>
            <div className={styles.trend_inner}>
                {data && items}
            </div>
        </div>
    )
}