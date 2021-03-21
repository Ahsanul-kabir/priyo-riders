import React from 'react'
import {trainData} from '../vhicalListDetailsData'

const Train = () => {
 return (
  <div>
    {trainData.map((item)=>{
     const{id,image,price} = item
     return(
      <article>
       <img src={image} alt=""/>
       <h2>hii</h2>
      </article>
     )
    })}
  </div>
 )
}

export default Train
