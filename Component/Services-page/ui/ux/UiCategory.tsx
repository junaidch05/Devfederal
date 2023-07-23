
import Image from "next/image";
import web1 from './images/web1.png'
import web2 from './images/web2.png'
import mob1 from './images/mob1.png'
import mob2 from './images/mob2.png'
import saas from './images/saas.png'
import saas2 from './images/saas2.png'
import landing1 from './images/landing1.png'
import landing2 from './images/landing2.png'
import website1 from './images/website1.png'
import website2 from './images/website2.png'

export default function UiCategory() {
  return (
    <div className="container">

    <div className="timeline-block timeline-block-right">
       <div className="marker"></div>
       <div className="timeline-content">
          <h3>Web App UI/UX Design</h3>
          <p>We combine creativity and usability to craft stunning and intuitive web app designs. Our expert UI/UX designers prioritize user-centric experiences, ensuring smooth navigation, engaging interactions, and a visually captivating interface. Whether it's a complex business application or a user-friendly tool, we focus on delivering web app designs that enhance productivity and user satisfaction.</p>
          <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={web1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={web2} alt='html' className='timeline-icon-img'/>
        </div>
       
      </div>
    
       </div>
    </div>
    
    <div className="timeline-block timeline-block-left">
       <div className="marker"></div>
       <div className="timeline-content">
          <h3>Mobile App UI/UX Design</h3>
          <p>Our designers create mobile app interfaces that align with your brand identity and seamlessly adapt to various devices. We focus on delivering a seamless user experience, leveraging mobile-specific features, and employing intuitive design elements that ensure your app stands out in the competitive app market.</p>
          <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={mob1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={mob2} alt='html' className='timeline-icon-img'/>
        </div>
       
      </div>
         
          
       
       </div>
    </div>
    
    <div className="timeline-block timeline-block-right">
       <div className="marker"></div>
       <div className="timeline-content">
          <h3>SaaS Product Design</h3>
          <p> Empower your SaaS product with exceptional design from Dev Federal. Our UI/UX designers are skilled in creating user-friendly and visually appealing SaaS interfaces</p>
          <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={saas} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={saas2} alt='html' className='timeline-icon-img'/>
        </div>
       
      </div>
         
         
       </div>
    </div>
    <div className="timeline-block timeline-block-left">
       <div className="marker"></div>
       <div className="timeline-content">
          <h3>Landing Page Design</h3>
          <p>From compelling visuals to persuasive copy, our landing page designs are optimized for high conversion rates, making them an essential tool for your marketing campaigns and lead generation efforts.</p>
          <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={landing1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={landing2} alt='html' className='timeline-icon-img'/>
        </div>
       
      </div>
         
          
       
       </div>
    </div>
    <div className="timeline-block timeline-block-right">
       <div className="marker"></div>
       <div className="timeline-content">
          <h3>Website Design</h3>
          <p> From choosing the right color palette to creating intuitive navigation and impactful visuals, we ensure that your website design represents your brand effectively and provides an exceptional user experience.</p>
          <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={website1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={website2} alt='html' className='timeline-icon-img'/>
        </div>
       
      </div>
         
          
       
       </div>
    </div>
    
    
    
    
    
    </div>
  )
}
