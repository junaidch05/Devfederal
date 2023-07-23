
import Image from 'next/image'
import Link from 'next/link'
import graphic from '../../../public/grapghic.webp'


export default function GraphicContainer() {
  return (
    <section className='service-container'>
    <div className="row">
    <div className="image">
    <Image src={graphic} alt="graphic design" className='img'/>

  </div>
  
  <div className="service-content">
 
   <h3>Graphic designing</h3>
   <p> From logo design to branding materials, our creative graphic designers bring your vision to life, creating visually striking designs that represent your brand identity effectively.</p> 
  <Link href="/services/graphic-designing" className='service-content-link'>Learn more</Link>
  </div>


    </div>

    
    </section>
  )
}
