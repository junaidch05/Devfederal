import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import devfederal from '../../public/devfederal.jpg'

export default function Navbar() {
  
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link href="/" className="logo-link">
        <Image src={devfederal} alt='dev federal' priority={true} className='logo-image'/>
          </Link>
        </div>

      
          <nav className="navbar">
            <Link className="link" href="/services" >
              Services
            </Link>
            <Link className="link" href="/career" >
              Career
            </Link>
            <Link className="link" href="/contact" >
              Contact us
            </Link>
          </nav>

          <Link className="btn" href="/contact" >
              Hire a developer
            </Link>
   
    
      </header>


    <nav className="navbar-bottom">
    <Link className="link-bottom" href="/" >
    <FontAwesomeIcon icon={faHome} className='nav-icon' />
   
    </Link>
    <Link className="link-bottom" href="/services" >
    <FontAwesomeIcon icon={faCode}  className='nav-icon' />
    </Link>
    <Link className="link-bottom" href="/career" >
    <FontAwesomeIcon icon={faUsers} className='nav-icon' />
    </Link>
    <Link className="link-bottom" href="/contact" >
    <FontAwesomeIcon icon={faHeadset} className='nav-icon' />
    </Link>
  </nav>
    </>
  );
}
