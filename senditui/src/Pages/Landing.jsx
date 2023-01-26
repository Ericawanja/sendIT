import React from "react";

function Landing() {
  return (
    <div className="landingContainer">
      <div className="landingHeader">
        <div className="logo">
          <span className="logoIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(0, 0, 0, 1)"
            >
              <path d="M21.993 7.95a.96.96 0 0 0-.029-.214c-.007-.025-.021-.049-.03-.074-.021-.057-.04-.113-.07-.165-.016-.027-.038-.049-.057-.075-.032-.045-.063-.091-.102-.13-.023-.022-.053-.04-.078-.061-.039-.032-.075-.067-.12-.094-.004-.003-.009-.003-.014-.006l-.008-.006-8.979-4.99a1.002 1.002 0 0 0-.97-.001l-9.021 4.99c-.003.003-.006.007-.011.01l-.01.004c-.035.02-.061.049-.094.073-.036.027-.074.051-.106.082-.03.031-.053.067-.079.102-.027.035-.057.066-.079.104-.026.043-.04.092-.059.139-.014.033-.032.064-.041.1a.975.975 0 0 0-.029.21c-.001.017-.007.032-.007.05V16c0 .363.197.698.515.874l8.978 4.987.001.001.002.001.02.011c.043.024.09.037.135.054.032.013.063.03.097.039a1.013 1.013 0 0 0 .506 0c.033-.009.064-.026.097-.039.045-.017.092-.029.135-.054l.02-.011.002-.001.001-.001 8.978-4.987c.316-.176.513-.511.513-.874V7.998c0-.017-.006-.031-.007-.048zm-10.021 3.922L5.058 8.005 7.82 6.477l6.834 3.905-2.682 1.49zm.048-7.719L18.941 8l-2.244 1.247-6.83-3.903 2.153-1.191zM13 19.301l.002-5.679L16 11.944V15l2-1v-3.175l2-1.119v5.705l-7 3.89z"></path>
            </svg>
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
            We make fast deliveries, now, and everywhere
          </span>
          <span className="landingImg">
            <img src="/assets/sendit.png" alt="company" />
          </span>
        </div>
      </div>
      {/* <div className="landingBenefits">
        <h2>Key benefits</h2>
        <div className="benefitsWrapper">
          <div className="benefits">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                <path d="M13 7h-2v6h6v-2h-4z"></path>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
              >
                <path d="M11 12h6v6h-6z"></path>
                <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.001 16H5V8h14l.001 12z"></path>
              </svg>
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
      </div> */}
    </div>
  );
}

export default Landing;
