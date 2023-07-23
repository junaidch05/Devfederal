
import UI from '../../../public/UI.png'
import Image from 'next/image'
import Link from 'next/link'

export default function UxContainer() {
  return (
    <section className='service-container'>
    <div className="row">
   
  
  <div className="service-content">
 
   <h3>UI/UX designing</h3>
   <p> Our talented designers craft visually appealing and user-friendly interfaces, ensuring your digital products captivate your target audience and enhance user engagement.</p> 
  <Link href="/services/ui-designing" className='service-content-link'>Learn more</Link>
  </div>

  <div className="image">
    <Image src={UI} alt="Ui/UX design" className='img'/>

  </div>
    </div>

    
    </section>
  )
}
