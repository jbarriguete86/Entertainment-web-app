function handleBookmark(index){
    const newData = data[index]
    const updateData = {...newData, isBookmarked:!newData.isBookmarked}
    setData(prevData=>{
        const newDataArr = [...prevData]
        newDataArr[index] = updateData
        return newDataArr
        })
}

export {handleBookmark}