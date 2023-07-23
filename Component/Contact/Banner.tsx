
import call from "../../public/call.webp";
import Image from "next/image";

function Banner() {
  return (
    <section className="service-container all-services">
      <div className="row">
        <div className="image">
          <Image src={call} alt="contact us"  priority={true} className="img" />
        </div>

        <div className="service-content">
          <div className="swipe">
            <h3>Contact us</h3>
          </div>
          <div className=" swipe swipe-delay">
            <p>
              We believe in open communication, transparency, and collaboration
              throughout every step of the project, ensuring that we meet and
              exceed your expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
