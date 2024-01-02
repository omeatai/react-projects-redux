import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Our team of seasoned travel experts ensures seamless transitions
            between destinations, allowing you to focus on the magic of the
            journey. From the moment you dream of your next escapade to the
            instant you touch down on foreign soil, Barloys is committed to
            transforming your travel aspirations into reality.
          </p>
          <p>
            Join us in creating memories that last a lifetime, as we redefine
            the art of travel and invite you to explore the world in style.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
