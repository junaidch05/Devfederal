import   './globals.css' 
import Navbar from '@/Component/Common/Navbar'
import Poster from '@/Component/Common/Poster'
import Footer from '@/Component/Common/Footer'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}







export const metadata = {
  title: 'Dev Federal - Empowering Your Digital Success',
  description: 'Your one-stop solution for web development, graphic design, UI/UX, and SEO services. Our expert team combines cutting-edge technology and creative design to deliver exceptional digital experiences. Enhance your online presence, engage your audience, and boost your search engine rankings with our customized solutions. Contact us today for professional and results-driven software solutions."',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel='icon' href='/favicon.ico'/>
      </head>
      <body suppressHydrationWarning={true}>
      <Navbar/>

        {children}
        <Poster/>
        <Footer/>
  
      </body>
    </html>
  )
}
