import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { WhatsApp, Mail, LinkedIn, YouTube, GitHub } from "@material-ui/icons";


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Engineer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/user.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Carlos Orozco</h1>
          <h3>
          Electronic <span ref={textRef}></span>
          </h3>
          <div className="links">
            <a href="https://www.whatsapp.com/" target="_blank">
              <WhatsApp className="icons-i" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              {" "}
              <LinkedIn className="icons-i" />{" "}
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              {" "}
              <YouTube className="icons-i" />
            </a> 

            <a href="https://github.com" target="_blank">
              {" "}
              <GitHub className="icons-i" />
            </a>
          </div>
        </div>
        <a href="#portfolio" className="abajo">
          <img loading="lazy" src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
