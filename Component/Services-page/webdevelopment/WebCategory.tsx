
import Image from 'next/image'
import html from './Images/html.png'
import bootstrap from './Images/bootstrap.png'
import php from './Images/php.png'
import css from './Images/css-3.png'
import js from  './Images/js.png'
import social from './Images/social.png'
import woocommerce from './Images/woocommerce.png'
import shopify from './Images/shopify.png'
import wordpress from './Images/wordpress.png'
import wix from './Images/wix.png'
import sql from './Images/sql.png'
import react from './Images/react.png'
import python from './Images/python.png'
import ruby from './Images/ruby.png'
import node from './Images/node.png'

export default function WebCategory() {
  return (
   <>
   <div className="container">

<div className="timeline-block timeline-block-right">
   <div className="marker"></div>
   <div className="timeline-content">
      <h3>Web development</h3>
      <p> Dev Federal specializes in static web development, offering efficient and visually appealing websites that load quickly and provide a seamless user experience. Our expert team leverages modern technologies and best practices to create static websites that showcase your brand effectively.</p>
    
      <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={html} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={css} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={php} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={bootstrap} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={js} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={social} alt='html' className='timeline-icon-img'/>
        </div>
      </div>
   </div>
</div>

<div className="timeline-block timeline-block-left">
   <div className="marker"></div>
   <div className="timeline-content">
      <h3>E-commerce solution</h3>
      <p>Take your business online and maximize your revenue potential with our e-commerce solutions. Dev Federal builds secure and scalable e-commerce platforms tailored to your specific requirements. From intuitive product catalogs and seamless checkout processes to robust inventory management and secure payment gateways, we empower you to create a compelling online shopping experience for your customers. </p>
     
    
      <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={shopify} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={woocommerce} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={wordpress} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={wix} alt='html' className='timeline-icon-img'/>
        </div>
      </div>  
   
   </div>
</div>

<div className="timeline-block timeline-block-right">
   <div className="marker"></div>
   <div className="timeline-content">
      <h3>web applications</h3>
      <p>
      At Dev Federal, we excel in developing web applications that streamline business processes and enhance productivity. Our skilled developers leverage the latest technologies to build custom web applications that are secure, scalable, and efficient. 
      </p>
     
    
      <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={node} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={php} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={python} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={react} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={sql} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={ruby} alt='html' className='timeline-icon-img'/>
        </div>
      </div>  
   </div>
</div>




</div>
   
   
   </>
  )
}
