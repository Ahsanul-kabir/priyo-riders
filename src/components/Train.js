import React from 'react'
import {trainData} from '../vhicalListDetailsData'

const Train = () => {
 return (
  <div>
    {trainData.map((item)=>{
     const{id,image,price} = item
     return(
      <article style={{display:'flex', }}>
      <img src={image} style={{width:'80px',height:'40px',marginRight:'10px'}} alt=""/>
      <h2 style={{paddingRight:"5px"}}>Train</h2>
      <h2>{price}</h2>
     </article>
     )
    })}
  </div>
 )
}

export default Train
