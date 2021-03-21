import React from 'react'
import {busData} from '../vhicalListDetailsData'

const Bus = () => {
 return (
  <div>
    {busData.map((item)=>{
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

export default Bus