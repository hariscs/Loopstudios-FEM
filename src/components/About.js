import "./About.css";

import person from "../images/mobile/image-interactive.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__flex">
          <img src={person} alt="person" />

          <div className="about__info">
            <h2 className="about__info--title">The leader in interactive VR</h2>
            <p className="about__info--subtitle">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
