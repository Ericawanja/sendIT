import React from "react";
import "./styles/styles.Landing.css";
import {
  GiCargoShip,
  GiWorld,
  GiHeavyTimer,
  GiTimeSynchronization,
} from "react-icons/gi";

function Landing() {
  return (
    <div className="bodyContainer">
      <div className="landingContainer">
        <div className="landingHeader">
          <div className="logo">
            <span className="logoIcon">
              <GiCargoShip className="logoIcon" />
            </span>
            <span className="logoName">SendIT</span>
          </div>
          <div className="right">
            <span className="register">Register</span>
            <span className="login">Log in</span>
          </div>
        </div>
        <div className="landingMain">
          <div className="landingIntro">
            <span className="title">
              We make fast deliveries, now, and everywhere. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Voluptas, fugiat dolorem!
              Quisquam,
            </span>
            <span className="landingImg">
              <img src="/assets/sendit.png" alt="company" />
            </span>
          </div>
        </div>
        <div className="landingBenefits">
          <h2>Key benefits</h2>
          <div className="benefitsWrapper">
            <div className="benefits">
              <span className="icon">
                <GiWorld />
              </span>
              <span className="benefitDetails">
                <h3>Anywhere in the world Delivery</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, recusandae? Natus, incidunt saepe quos molestias aut
                  qui
                </p>
              </span>
            </div>
            <div className="benefits">
              <span className="icon">
                <GiHeavyTimer />
              </span>
              <span className="benefitDetails">
                <h3>Now- Right on Time</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, recusandae? Natus, incidunt saepe quos molestias aut
                  qui
                </p>
              </span>
            </div>
            <div className="benefits">
              <span className="icon">
                <GiTimeSynchronization />
              </span>
              <span className="benefitDetails">
                <h3>Any time- 24 hrs operation</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, recusandae? Natus, incidunt saepe quos molestias aut
                  qui
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
