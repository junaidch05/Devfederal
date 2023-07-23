
import GrapghicDesignPage from '../../../public/GrapghicDesignPage.jpg'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='service-container all-services'>
    <div className="row">
    <div className="image">
    <Image src={GrapghicDesignPage} alt="graphic designing"  priority={true} className='img'/>

  </div>
  
  <div className="service-content">
  <div className="swipe">
   <h3>Graphic designing</h3>
   </div>
   <div className=" swipe swipe-delay">
   <p>By prioritizing user-centric design principles, we create intuitive and engaging experiences that leave a lasting impression and drive user satisfaction.</p>
   </div>
  </div>


    </div>

    
    </section>
  )
}
