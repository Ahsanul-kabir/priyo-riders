import React from 'react'
import {busData} from '../vhicalListDetailsData'

const Bus = () => {
 return (
  <div>
    {busData.map((item)=>{
     const{id,image,price} = item
     return(
      <article style={{display:'flex', }}>
      <img src={image} style={{width:'80px',height:'40px',marginRight:'10px'}} alt=""/>
      <h2 style={{paddingRight:"5px"}}>Bus</h2>
      <h2>{price}</h2>
     </article>
     )
    })}
  </div>
 )
}

export default Bus