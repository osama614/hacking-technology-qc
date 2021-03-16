import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Transition } from "react-transition-group";
import { MainIllust } from "../../../assets";

const Main = () => {
  const [inProp, setInProp] = useState(false);
  const duration = 800;
  const translate = "-20%";
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
    opacity: 0,
    transform: `translateY(${translate})`,
  };
  const transitionStyles = {
    entering: { opacity: 1, transform: "translateY(0%)" },
    entered: { opacity: 1, transform: "translateY(0%)" },
    exiting: { opacity: 0, transform: `translateY(${translate})` },
    exited: { opacity: 0, transform: `translateY(${translate})` },
  };
  return (
    <div className="home main-wrapper d-flex">
      <div className="row d-flex m-0 w-100">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-4 p-md-5">
          <img src={MainIllust} alt="home" />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column text-center justify-content-center align-items-center p-5">
          <div className="type-writer py-4 px-0">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("انتظرونا قريبا...<br/>")
                  .typeString("Coming Soon...")
                  .start()
                  .callFunction(() => {
                    setInProp(true);
                  });
              }}
            />
          </div>
          <Transition in={inProp} timeout={500}>
            {(state) => (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                {" "}
                <p className="h5">
                  نعتذر عن استقبال المثليين وندعم القضية الفلسطينية
                </p>
                <p className="h3">We don't serve Homosexual,</p>
                <p className="h3">We support the Palestinian Cause</p>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Main;
