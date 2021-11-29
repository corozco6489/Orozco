
import  "./about.scss"
const About = () => {
    return (
        <div className="about" id="about">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img loading="lazy" src="assets/carlos.jpeg" alt="" className="a-img"/>
                </div>
            </div>


            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                I am an engineering student in Electronics and Communications, eager and motivated to learn new things in the workplace. I consider myself a humble person with a high capacity for rapid learning in any task in a self-taught way. Below you will see my experience and skills.                </p>
                <p className="a-desc">
                Electronic Engineering is a branch of Engineering that is responsible for solving problems related to the control of industrial processes, electronic power systems, instrumentation and control, and electrical transformation.
                </p>
                <div className="a-award">
                    <img loading="lazy" src="assets/about.jpg" alt="" className="a-award-img"/>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Knowledge and Skills</h4>
                        <p className="a-award-desc">
                        Telecommunications
                        <br />
Design and analysis of electronic instrumentation <br />
Microcontrollers <br />
Microprocessors                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About