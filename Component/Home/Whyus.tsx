
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoneyBill1,faHourglassHalf,faShieldHalved} from '@fortawesome/free-solid-svg-icons'



export default function Whyus() {
  return (
<>
<section className="whyus">

<div className="icons-container">


<div className="icons">
        <i> <FontAwesomeIcon icon={faMoneyBill1}  /></i>
        <div className="content">
          <h3>Budget Friendly</h3>
        </div>
      </div>
     
      <div className="icons">
      <i> <FontAwesomeIcon icon={faHourglassHalf}  /></i>
        <div className="content">
          <h3>ON-TIME DELIVERY </h3>
        </div>
      </div>
      <div className="icons">
      <i> <FontAwesomeIcon icon={faShieldHalved}  /></i>
        <div className="content">
          <h3>GUARANTEED SATISFACTION</h3>
        </div>
      </div>

   

</div>

    </section>

</>
  )
}
