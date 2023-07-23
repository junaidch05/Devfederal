import Link from 'next/link'
import Swipper from './Swipper'


export default function Bannercontent() {
  return (
   <>
    
    <div className="content">
  <div className="upperclass">
  <div className="swipe">
   <h3>Innovate. Transform. Succeed.</h3>
   </div>
   <div className=" swipe swipe-delay">
   <p>Empowering businesses with digital solutions that drive growth and success.</p>
   </div>
   <Link href='/contact'> <button className="btn">Hire now</button></Link>
     
  </div>
  <div className="lowerclass">
 <Swipper/>
  </div>
    </div>
   </>
  )
}
