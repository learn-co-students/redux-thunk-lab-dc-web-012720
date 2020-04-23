import React from 'react'

const CatList = (props) => {
    return (
    <div>
        {props.catPics.map(cat => <img src={cat.url} key ={cat.id} alt = {`kitty${cat.id}`}></img>)}
    </div>)
}

export default CatList