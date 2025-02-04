import React, {useState, useContext} from "react";
import { AccordianTemp } from './Accordian';
import '/src/css/about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DarkModeContext } from "./DarkModeContext";

const AboutSection = () => {    
    const {darkTheme} = useContext(DarkModeContext);
    const contentEdu = ["<b>MEng Aeronautics and Astronautics</b> </br> <b>(Specialization in Computational Engineering)</b> </br> University of Southampton </br> Oct 2021 - Present", "<b>Cambridge A-Levels</b> <br/> Taylor's College <br/> Jan 2020 - Jun 2021"];
    const contentSkills = ["SolidWorks, COMSOL, Ansys, MATLAB", "C, Python, Arduino, Flutter, JS", "HTML, CSS, JS", "Blender",  "Git", "Microsoft Productivity Suite"]
    const contentInterests = ["Flight Simulator, Blender, Programming, Video Games"];
    return (
        <>
            <div className="row section-2">
                <div className="col-lg-12 g-0">
                    {/* <h2>
                        About Me
                    </h2> */}
                    <div className="abt-cont">
                        <img className={ darkTheme ? "abt-img dm" : "abt-img"} src={"../drawing.png"}/>
                        <span className="abt-name">Sean C. </span>
                        <div className="abt-text">
                            <span>
                                I am a 4th year MEng student with practical experience in engineering projects, alongside a passion in programming and
                                design. I aim to apply my skills into diverse aerospace projects that can challenge my abilities, while enabling me to showcase my strengths and creativity
                                in solving problems. 
                            </span><br/><br/><br/>
                            <AccordianTemp index={0} title={'Education'} content={contentEdu}/>
                            <AccordianTemp index={1} title={'Skills'} content={contentSkills}/>
                            <AccordianTemp index={2} title={'Interests'} content={contentInterests}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutSection;