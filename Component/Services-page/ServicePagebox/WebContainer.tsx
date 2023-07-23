
import web from '../../../public/web.webp'
import Image from 'next/image'
import Link from 'next/link'

export default function WebContainer() {
  return (
    <section className='service-container'>
    <div className="row">
    <div className="image">
    <Image src={web} alt="web development" className='img'/>

  </div>
  
  <div className="service-content">
 
   <h3>Web development</h3>
   <p>Our experienced developers create dynamic and responsive websites that provide seamless user experiences, ensuring your online presence leaves a lasting impression.</p> 
  <Link href="/services/web-development" className='service-content-link'>Learn more</Link>
  </div>


    </div>

    
    </section>
  )
}
