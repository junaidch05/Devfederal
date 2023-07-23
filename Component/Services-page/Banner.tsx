
import team from '../../public/team.webp'
import Image from 'next/image'

function Banner() {
  return (
    <section className='service-container all-services'>
    <div className="row">
    <div className="image">
    <Image src={team} alt="Fev Federal services"  priority={true} className='img'/>

  </div>
  
  <div className="service-content">
 
  <div className="swipe">
   <h3>Our services</h3>
   </div>
   <div className=" swipe swipe-delay">
   <p>At Dev Federal, we offer a comprehensive range of services to cater to all your digital needs. Whether you require web development, SEO optimization, UI/UX designing, graphic designing, digital marketing, or copywriting, our talented team is equipped to deliver exceptional results tailored to your unique requirements.</p>
   </div>

  </div>


    </div>

    
    </section>
  )
}

export default Banner