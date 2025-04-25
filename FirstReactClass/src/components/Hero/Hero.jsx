import { CiSearch } from "react-icons/ci";
import heroImage from "../../assets/img.png";
import { FaGraduationCap } from "react-icons/fa6";

const Hero = () => {
    let user = "jospeph"
    let firstnAME = "SAM"
    return (
        <div>
            <div className="heroSection">
                <div className="subHero">

                    {/* left hero section */}
                    <section className="leftHero">

                        {/* first content under leftHero */}
                        <div className="contentLeft">
                            <div style={{ color: "green" }} >Hello world {`${user} ${firstnAME}`}</div>
                            <div style={{ fontSize: '60px', fontWeight: "900" }}>We have all kinds of <span>Courses</span> Collections</div>
                            <div style={{ color: "black" }}>Our course makes you industry standard</div>
                        </div>

                        {/* second content under leftHero*/}
                        <div className="inputCon">
                            <input placeholder="search" />
                            <CiSearch style={{ backgroundColor: "green", padding: "9px", color: "white" }} />
                        </div>

                        {/* third content under leftHero*/}

                        <div style={{ display: "flex", alignItems: "center", marginTop: "10px", gap: "5px" }}>
                            <div style={{ color: "black" }}>people search:</div>
                            <span style={{ border: "1px solid green", width: "auto", height: "auto", padding: "5px", borderRadius: "9px" }}>
                                blog
                            </span>
                            <span style={{ border: "1px solid green", width: "auto", height: "auto", padding: "5px", borderRadius: "9px" }}>
                                ui/ux
                            </span>
                            <span style={{ border: "1px solid green", width: "auto", height: "auto", padding: "5px", borderRadius: "9px" }}>
                                front end
                            </span>
                            <span style={{ border: "1px solid green", width: "auto", height: "auto", padding: "5px", borderRadius: "9px" }}>
                                back end
                            </span>
                        </div>
                    </section>

                    {/* right hero section */}
                    <section className="rightHero">
                        <img src={heroImage} />
                        <div className="smallCon">
                            <div style={{ width: "150px", height: "100%", display: "flex", justifyContent: "center", backgroundColor: "white", alignItems: "center", borderRadius: "50px 0 0 50px" }}>
                                <FaGraduationCap style={{ color: "green", fontSize: "50px" }} />
                            </div>
                            <div style={{ fontSize: "20px", padding: "10px" }}>Lorem ipsum dolor sit amet <br /> consectetur .</div>
                        </div>
                    </section>

                </div>

            </div>
        </div>
    )
}

export default Hero