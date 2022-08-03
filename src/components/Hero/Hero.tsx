import "./styles.scss";

import HeroImage from "../../assets/hero.svg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Hero = () => {
  return (
    <section className="hero">
      <div className="heroText">
        <h1>
          We build and design
          <br /> <span>great websites</span> <br />
          for <span>small businesses</span>
        </h1>
        <p>
          We develop custom made solutions to best serve your needs and take
          your business to the next level!
        </p>
        <div className="buttons">
          <PrimaryButton buttonText="Learn more" />
          <PrimaryButton buttonText="Get in touch!" />
        </div>
      </div>
      <img src={HeroImage} alt="" />
    </section>
  );
};

export default Hero;
