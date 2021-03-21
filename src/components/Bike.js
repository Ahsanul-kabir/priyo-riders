import React from 'react'
import {bikeData} from '../vhicalListDetailsData'

const Bike = () => {
 return (
  <div>
    {bikeData.map((item)=>{
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

export default Bike
