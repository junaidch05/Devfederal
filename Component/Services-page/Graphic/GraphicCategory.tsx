
import Image from "next/image";
import post1 from './images/post1.png'
import post2 from './images/post2.png'
import mag1 from './images/mag1.png'
import mag2 from './images/mag2.png'
import info1 from './images/info1.png'
import info2 from './images/info2.png'
import menu1 from './images/menu1.png'
import menu2 from './images/menu2.png'
import media1 from './images/media1.png'
import media2 from './images/media2.png'
import b1 from './images/b1.png'
import b2 from './images/b2.png'

export default function GraphicCategory() {
  return (
    <div className="container">

    <div className="timeline-block timeline-block-right">
       <div className="marker"></div>
       <div className="timeline-content">
          <h3>Postcards and flyers</h3>
          <p>Bring your postcards and flyers to life with visually compelling designs that grab attention and communicate your message effectively. Our designers combine captivating visuals, strategic layout, and persuasive copy to create marketing materials that engage your target audience and drive results.</p>
          <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={post1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={post2} alt='html' className='timeline-icon-img'/>
        </div>
      
       
      </div>
    
       </div>
    </div>
    
    <div className="timeline-block timeline-block-left">
       <div className="marker"></div>
       <div className="timeline-content">
          <h3>Magazine and Newspaper ads</h3>
          <p>Stand out in print media with eye-catching magazine and newspaper ads designed by Dev Federal. Our skilled graphic designers understand the importance of creating visually striking ads that capture the reader's attention amidst the clutter. We ensure that your ads effectively convey your brand identity and key messages, maximizing your reach and impact.</p>
          <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={mag1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={mag2} alt='html' className='timeline-icon-img'/>
        </div>
      
       
      </div>
          
          
       
       </div>
    </div>
    
    <div className="timeline-block timeline-block-right">
       <div className="marker"></div>
       <div className="timeline-content">
          <h3>Infographics</h3>
          <p>Simplify complex information and engage your audience with visually appealing infographics. Dev Federal graphic designers specialize in creating compelling infographics that present data and concepts in a clear, concise, and visually engaging manner. Whether it's for educational purposes or marketing campaigns, our infographics help you communicate your message effectively and leave a lasting impression.</p>
          <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={info1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={info2} alt='html' className='timeline-icon-img'/>
        </div>
      
       
      </div>
          
         
       </div>
    </div>
    <div className="timeline-block timeline-block-left">
       <div className="marker"></div>
       <div className="timeline-content">
          <h3>Menus</h3>
          <p>Create menus that showcase your offerings with enticing visuals, appealing typography, and well-organized layouts. We ensure that your menu design aligns with your restaurant's ambiance and effectively guides customers through their culinary choices.</p>
         
          <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={menu1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={menu2} alt='html' className='timeline-icon-img'/>
        </div>
      
       
      </div>
          
       
       </div>
    </div>
    <div className="timeline-block timeline-block-right">
       <div className="marker"></div>
       <div className="timeline-content">
          <h3>Social media ads</h3>
          <p>Create engaging ad designs that align with the unique requirements and specifications of various social media platforms. From Facebook and Instagram to LinkedIn and Twitter, we deliver ads that generate clicks, likes, and conversions.</p>
         
          <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={media1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={media2} alt='html' className='timeline-icon-img'/>
        </div>
      
       
      </div>
          
       
       </div>
    </div>
    
    <div className="timeline-block timeline-block-left">
       <div className="marker"></div>
       <div className="timeline-content">
          <h3>Brochures (digital)</h3>
          <p>We incorporate interactive elements, engaging visuals, and compelling content to ensure that your digital brochure captivates your audience and effectively promotes your products or services.</p>
          <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={b1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={b2} alt='html' className='timeline-icon-img'/>
        </div>
      
       
      </div>
          
          
       
       </div>
    </div>
    
    
    
    
    </div>
  )
}
