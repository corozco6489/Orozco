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
          <img src="assets/user2.png" alt="" />
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
            <a href="https://wa.me/5930983592690" target="_blank">
              <WhatsApp className="icons-i" />
            </a>
            <a href="https://www.linkedin.com/in/carlos-orozco-64892021/" target="_blank">
              {" "}
              <LinkedIn className="icons-i" />{" "}
            </a>
            {/* <a href="https://www.youtube.com/channel/UCgR2CZLCClCdTeo_l5W53eQ" target="_blank">
              {" "}
              <YouTube className="icons-i" />
            </a> */}

            <a href="https://github.com/corozco6489" target="_blank">
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
