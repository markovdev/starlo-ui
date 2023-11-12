import React from "react";
import hero from "../assets/img/hero.png";
import Grid from "./Containers/Layout/Grid";
import Reveal from "../Animations/Reveal";
import SlideIn from "../Animations/SlideIn";
import Photo from "./Photo/Photo";
import Animate from "./UI/Animate";
const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header__text">
        <Animate hidden={{ x: "-100%" }} visible={{ x: "0%" }}>
          <h1 className="heading--primary">
            Starlo For All clients, devs and business owners
          </h1>
        </Animate>

        <Animate hidden={{ y: "100%" }} visible={{ y: "0%" }}>
          <a
            className="btn btn--primary"
            href="https://github.com/markovdev/starlo-api#starlo"
            rel="noreferrer"
            target="_blank"
          >
            API documntation
          </a>
        </Animate>
      </div>
      <Animate
        hidden={{ x: "100%" }}
        visible={{ x: "0" }}
        className="header__img-box"
      >
        <Photo className="header__img" src={hero} />
      </Animate>
    </header>
  );
};

export default Header;
