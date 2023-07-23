
import ux from '../../../../public/ux.webp'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='service-container all-services'>
    <div className="row">
    <div className="image">
    <Image src={ux} alt="ui/ux designing"  priority={true} className='img'/>

  </div>
  
  <div className="service-content">
  <div className="swipe">
   <h3>Ui/Ux designing</h3>
   </div>
   <div className=" swipe swipe-delay">
   <p>We combine aesthetics with user-centric design principles to craft exceptional user experiences.</p>
   </div>
  </div>


    </div>

    
    </section>
  )
}
