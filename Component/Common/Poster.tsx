'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'


export default function Poster() {
  const pathname = usePathname()
  const isContactPage = pathname === '/contact';
  return (
  <>
  <section className="poster">
    {
      !isContactPage?<>
      <div className="content">
    <h1>Have an Idea?</h1>
    <p>Reach us out. Discuss with us and get the result you desire.</p>
    <Link href='/contact' className='posterlink'>Get an appointment</Link>
   </div>
      </>:<>
      <div className="content">
    <h1>Reach us now</h1>
    <p>At Dev Fedral, we prioritize client satisfaction and strive to build long-lasting partnerships. </p>
   </div>
      </>
    }
   
  </section>
  
  </>
  )
}
