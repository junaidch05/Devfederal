
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faBezierCurve } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

export default function Service() {
  const service = [
    {
      title: "Web app development",
      desc: "Driving your Growth with 360° Web Solution",
      icon: faLaptopCode,
      url: "/services/web-development",
    },
    {
      title: "UI/UX designing",
      desc: "Designing Interfaces that Connect and Convert",
      icon: faBezierCurve,
      url: "/services/ui-designing",
    },
    {
      title: "Graphic designing",
      desc: "Infusing Your Brand with Visual Brilliance",
      icon:faPalette,
      url: "/services/graphic-designing",
    },
    {
      title: "Search engine optimization",
      desc: "Get your brand on the top",
      icon: faChartLine ,
      url: "/services/seo",
    },
  ];

  return (
    <>
      <section className="home-services">
        <h1 className="heading">
          {" "}
          <span>Our services</span>
        </h1>
        <div className="box-container">
          {service.map((service) => (
            <Link key={service.title} href={service.url}>
             
                <div className="box">
                  <i>
                  <FontAwesomeIcon icon={service.icon} />
                  </i>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
           
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
