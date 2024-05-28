import React, {useState, useEffect, useRef} from "react"
import Data from "../data.json"
import styles from "../App.module.css"
import movieLogo from "../assets/icon-category-movie.svg"
import seriesLogo from "../assets/icon-category-tv.svg"
import notBookmarked from "../assets/icon-bookmark-empty.svg"
import bookmarked from "../assets/icon-bookmark-full.svg"
import searchIcon from "../assets/icon-search.svg"
import Trending from "../components/Trending"

export default function Home(){
const [data, setData] = useState()
const [searchData, setSearchData]= useState({searchValue:""})
const timeoutRef = useRef(null)

useEffect(()=>{
    getData()
}, [Data])

useEffect(()=>{
    console.log(searchData)
}, [searchData])

    function getData(){
        setData(Data)
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

    function handleChange(e){
        const dataAll= Data.filter(dat => dat.category === "Movie")
        setSearchData({ searchValue: e.target.value.toLowerCase() })

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
          
              timeoutRef.current = setTimeout(() => {
                    if(e.target.value){
                        const filteredData= dataAll.filter(element=> element.title.toLowerCase().includes(searchData.searchValue))
                        setData(filteredData)
                    } else {
                        getData()
                    }

              }, 500)
        
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
            <input 
                type="text"
                className={styles.search} 
                name="searchValue"
                value={searchData.searchValue}
                onChange={handleChange}
                placeholder="Search for movies or TV Series"/>
        </div>
        <Trending/>
        <div className={styles.main_container}>
            <p>Recommended for you</p>
            <div className={styles.main_inner}>
                {data && items }
            </div>
        </div>
        </div>
    )
}