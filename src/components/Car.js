import React from 'react'
import {carData} from '../vhicalListDetailsData'

const Car = () => {
 return (
  <div>
    {carData.map((item)=>{
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

export default Car
