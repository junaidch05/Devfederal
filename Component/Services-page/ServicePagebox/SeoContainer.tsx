
import seo from '../../../public/seo.webp'
import Image from 'next/image'
import Link from 'next/link'

export default function SeoContainer() {
  return (
    <section className='service-container'>
    <div className="row">
   
  
  <div className="service-content">
 
   <h3>Search engine optimization</h3>
   <p>We employ effective strategies and techniques to improve your website's visibility in search engine rankings, driving organic traffic and boosting your online presence.</p> 
  <Link href="/services/seo" className='service-content-link'>Learn more</Link>
  </div>
  <div className="image">
    <Image src={seo} alt="seo" className='img'/>

  </div>

    </div>

    
    </section>
  )
}
