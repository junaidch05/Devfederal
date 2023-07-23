
import seoPage from '../../../public/seoPage.webp'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='service-container all-services'>
    <div className="row">
    <div className="image">
    <Image src={seoPage} alt="seo"  priority={true} className='img'/>

  </div>
  
  <div className="service-content">
  <div className="swipe">
   <h3>Search Engine Optimization</h3>
   </div>
   <div className=" swipe swipe-delay">
   <p>Boost your online visibility and attract organic traffic with our strategic SEO services. </p>
   </div>
  </div>


    </div>

    
    </section>
  )
}
