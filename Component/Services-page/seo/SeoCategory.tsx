
import Image from "next/image";
import keyword from './images/keyword.png'
import keyword1 from './images/keyword1.png'
import keyword3 from './images/keyword3.png'
import content1 from './images/content1.png'
import content3 from './images/content3.png'
import audit from './images/audit.png'
import audit2 from './images/audit2.png'
import onpage1 from './images/onpage1.png'
import onpage2 from './images/onpage2.png'
import offpage from './images/offpage.png'
import offpage2 from './images/ofpage.png'
import contentd1 from './images/contentd.png'
import contentd2 from './images/contend2.png'

export default function SeoCategory() {
  return (
    <>
      <div className="container">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Keyword Strategy</h3>
            <p>
              Dev Federal SEO services begin with a comprehensive keyword
              strategy. Our experts conduct in-depth research to identify
              relevant keywords and phrases that align with your business and
              target audience. We optimize your website's content, meta tags,
              and other elements to ensure that your website ranks higher in
              search engine results pages (SERPs) and attracts quality organic
              traffic.
            </p>
            <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={keyword1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={keyword} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={keyword3} alt='html' className='timeline-icon-img'/>
        </div>
       
      </div>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Content strategy</h3>
            <p>
              A well-defined content strategy is crucial for SEO success.
              Devondeck helps you develop a content strategy that aligns with
              your business goals and target audience. We create a roadmap for
              creating high-quality, engaging, and optimized content that not
              only attracts search engine attention but also resonates with your
              audience, positioning you as an authoritative source in your
              industry.
            </p>
            <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={content1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={content3} alt='html' className='timeline-icon-img'/>
        </div>
       
      </div>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Site audits</h3>
            <p>
              We analyze factors such as site structure, page speed,
              mobile-friendliness, and user experience to provide
              recommendations and implement necessary optimizations for better
              search engine rankings.
            </p>
            <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={audit} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={audit2} alt='html' className='timeline-icon-img'/>
        </div>
       
      </div>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>On-page optimization</h3>
            <p>
              Dev Federal focuses on optimizing on-page elements to improve your
              website's visibility in search engine rankings. By implementing
              best practices and ensuring keyword-rich, user-friendly content,
              we enhance your website's chances of ranking higher and attracting
              targeted organic traffic.
            </p>
            <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={onpage1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={onpage2} alt='html' className='timeline-icon-img'/>
        </div>
       
      </div>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Off-page optimization</h3>
            <p>
              {" "}
              Building a strong online presence requires effective off-page
              optimization strategies. We develop strategic link-building
              campaigns, engage in guest blogging, and foster relationships with
              authoritative websites to generate high-quality backlinks, boost
              your website's credibility, and improve search engine rankings.
            </p>
            <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={offpage} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={offpage2} alt='html' className='timeline-icon-img'/>
        </div>
       
      </div>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Content development</h3>
            <p>
              {" "}
              Our skilled writers create engaging and informative content that
              incorporates relevant keywords, drives organic traffic, and
              supports your overall SEO strategy.
            </p>
            <div className="timeline-icons">
        <div className="timeline-icons-holder">
            <Image src={contentd1} alt='html' className='timeline-icon-img'/>
        </div>
        <div className="timeline-icons-holder">
            <Image src={contentd2} alt='html' className='timeline-icon-img'/>
        </div>
       
      </div>
          </div>
        </div>
      </div>
    </>
  );
}
