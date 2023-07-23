
import career from '../../public/career.webp'
import Image from 'next/image'

function Banner() {
  return (
    <section className='service-container all-services'>
    <div className="row">
    <div className="image">
    <Image src={career} alt="careers page"  priority={true} className='img'/>

  </div>
  
  <div className="service-content">
 
  <div className="swipe">
   <h3>Careers</h3>
   </div>
   <div className=" swipe swipe-delay">
   <p>No job post Available</p>
   </div>
  </div>


    </div>

    
    </section>
  )
}

export default Banner