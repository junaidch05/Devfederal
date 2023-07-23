
import web from '../../../public/website.webp'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='service-container all-services'>
    <div className="row">
    <div className="image">
    <Image src={web} alt="web development"  priority={true} className='img'/>

  </div>
  
  <div className="service-content">
 
  <div className="swipe">
   <h3>Web development</h3>
   </div>
   <div className=" swipe swipe-delay">
   <p>From custom designs to responsive layouts, we bring your online presence to life, ensuring seamless functionality and optimal user experiences.</p>
   </div>

  </div>


    </div>

    
    </section>
  )
}
