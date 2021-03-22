import React, { useState } from "react";
import ReactTypingEffect from 'react-typing-effect';
import { Transition } from "react-transition-group";
import { MainIllust } from "../../../assets";
import Spinner from "../../../shared/components/Spinner";

const Main = () => {
  const [loaded, setLoaded] = useState(false);
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
          <img src={MainIllust} alt="home" onLoad={() => setLoaded(true)} />
        </div>
        {loaded ? (
          <div className="col-12 col-md-6 d-flex flex-column text-center justify-content-center align-items-center p-5">
            <div className="type-writer py-4 px-0">
              <ReactTypingEffect
                text={["أنتظرونا قريبًا...", "Coming Soon..."]}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                  return (
                    <h1>
                      {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                          <span
                            key={key}
                          >{char}</span>
                        );
                      })}
                    </h1>
                  );
                  setInProp(true);
                }}
                speed={200}
                typingDelay={200}
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
                  <p className="h3">,We don't serve Homosexuals</p>
                  <p className="h3">We support the Palestinian Issue</p>
                </div>
              )}
            </Transition>
          </div>
        ) : (
          <Spinner></Spinner>
        )}
      </div>
    </div>
  );
};

export default Main;
