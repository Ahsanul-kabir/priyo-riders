import React, { useState } from 'react'
import Bike from '../Bike';
import Bus from '../Bus';
import Car from '../Car';
import Train from '../Train';



const SearchResult = ({value,toValue,fromValue}) => {


  return(
    <article>
      <div className="FromTo">
          <h5>{toValue}</h5>
          <h5>{fromValue}</h5>
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
