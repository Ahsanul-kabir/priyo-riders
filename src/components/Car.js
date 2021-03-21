import React from 'react'
import {carData} from '../vhicalListDetailsData'

const Car = () => {
 return (
  <div>
    {carData.map((item)=>{
     const{id,image,price} = item
     return(
      <article style={{display:'flex', }}>
       <img src={image} style={{width:'80px',height:'40px',marginRight:'10px'}} alt=""/>
       <h2 style={{paddingRight:"5px"}}>Car</h2>
       <h2>{price}</h2>
      </article>
     )
    })}
  </div>
 )
}

export default Car
