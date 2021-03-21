import React, { useState } from 'react'
import Bike from '../Bike';
import Bus from '../Bus';
import Car from '../Car';
import Train from '../Train';
import { Col, Container, Row } from 'react-bootstrap';


const SearchResult = ({value,toValue,fromValue}) => {


  return(

    <article style={{position:'absolute',top:'2%',left:'0%',height:'500px', width: '50%',
    backgroundColor: 'white'}}>
      <div className="FromTo">
          <h5 style={{paddingLeft:"30px"}}>{toValue}</h5>
          <h5 style={{paddingLeft:"30px"}}>{fromValue}</h5>
      </div>
       <div className="vehicle">
         {value === 1 && <Bike/>}
          {value === 2 && <Car/>}
          {value === 3 && <Bus/>}
          {value === 4 && <Train/>}
       </div>
  </article>
  )
 }

export default SearchResult
