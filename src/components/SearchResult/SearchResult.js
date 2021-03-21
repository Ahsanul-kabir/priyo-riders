import React, { useState } from 'react'
import Bike from '../Bike';
import Bus from '../Bus';
import Car from '../Car';
import Train from '../Train';
import { Col, Container, Row } from 'react-bootstrap';


const SearchResult = ({value,toValue,fromValue}) => {


  return(

    <article>
      <h1>Hi I am search result</h1>
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

//   <Container>
//   <Row>
//       <Col>
//       <div className="form" style={{ marginTop: '10px', marginBottom: '10px' }}>
//                         {/* <form style={{ marginLeft: '10px' }}>
//                             <label htmlFor="pickFrom">
//                                 Pick From
//                                 </label>
//                             <br />
//                             <input class="form-control form-control-sm" type="text" name="pickFrom" id="pickFrom" onChange={handleFromValue} />
//                             <br />
//                             <label htmlFor="pickTo">
//                                 Pick To
//                                 </label>
//                             <br />
//                             <input class="form-control form-control-sm" type="text" name="pickTo" id="pickTo" onChange={handleToValue} />
//                             <br />
//                             <button class="form-control form-control-sm" type="submit" onClick={handleSearch} style={{ marginTop: '5px' }}>Search</button>
//                         </form> */}

//                         {/* {show && <SearchResult value={value} fromValue={fromValue} toValue={toValue} />
//                             } */}
//                     </div>
//                     <div className="map">
//                         <section class="mt-5 container">
//                             <div class="embed-responsive embed-responsive-16by9">
//                                 <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.095885694224!2d90.38499431498123!3d23.74395988459254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b9c07b1693%3A0xe3defcf29e04f9e7!2sPriyoShop.com!5e0!3m2!1sen!2sbd!4v1610637019966!5m2!1sen!2sbd"
//                                     width="100%" height="200" frameborder="0" style={{border:'10px solid gray'}} aria-hidden="false" tabindex="0" allowfullscreen></iframe>
//                             </div>
//                         </section>
//                     </div>
//       </Col>
//   </Row>
// </Container>
  )
 }

export default SearchResult
