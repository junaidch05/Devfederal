import Image from "next/image";
import about from "../../public/about.webp";

export default function About() {
  return (
    <>
      <section className="about">
        <div className="row">
          <div className="image">
            <Image src={about} alt="about us" className="img" />
          </div>

          <div className="content">
            <h3>About us</h3>
            <p>
              Dev Federal is committed to empowering businesses with
              digital solutions that drive growth and success. By combining
              technical expertise with a user-centric approach, Our mission is
              to provide comprehensive and tailored services that encompass all
              aspects of digital transformation. From Web development and SEO
             to UI/UX design,and Graphic design, we offer a complete suite of solutions to meet
              your diverse needs.
            </p>
           
          </div>
        </div>
      </section>
    </>
  );
}
