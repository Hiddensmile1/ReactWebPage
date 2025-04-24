import "./App.css"
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import heroImage from "./assets/img.png"
import { FaGraduationCap } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2"
import { FaBoxTissue } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa"
import { GiTeacher } from "react-icons/gi";
import { FaChalkboardUser } from "react-icons/fa6"
import { MdDeveloperBoard } from "react-icons/md";

const App = () => {

  let user = "jospeph"
  return (
    <div>
      <header className="header">
        <div className="subHeader">
          <div className="logo">
            <p><span style={{ backgroundColor: "darkGreen", color: "white", paddingLeft: "12px" }}>E</span>don</p>
          </div>

          <nav className="navBar">
            <a>Home</a>
            <a>Service</a>
            <a>About</a>
            <a>Blog</a>
            <a>Contact</a>
          </nav>
          <div className="holder" >
            <MdOutlineShoppingCart />

            <div className="iconInput">
              <input placeholder="search" />
              <CiSearch />
            </div>

          </div>

          <IoMenu className="burgerMenu" style={{ color: "green", fontSize: "30px" }} />
        </div>

      </header>
      <div className="heroSection">
        <div className="subHero">

          {/* left hero section */}
          <section className="leftHero">

            {/* first content under leftHero */}
            <div className="contentLeft">
              <div style={{ color: "green" }} >Hello world {user}</div>
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
      <div className="contentIcon">
        <div className="subContentIcon">
          <div className="showCon">
            <div style={{ width: "130px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <HiMiniShoppingBag style={{ color: "green", fontSize: "60px" }} />
            </div>
            <div style={{ flex: "1", height: "100%", paddingTop: "20px" }}>
              <div style={{ fontWeight: "900" }}>
                Expose Learning
              </div>
              <div style={{ paddingTop: "7px" }}>
                Our course makes you industry standard Our course makes you
              </div>
            </div>
          </div>

          <div className="showCon">
            <div style={{ width: "130px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <FaBoxTissue style={{ color: "green", fontSize: "60px" }} />
            </div>
            <div style={{ flex: "1", height: "100%", paddingTop: "20px" }}>
              <div style={{ fontWeight: "900" }}>
                Expose Learning
              </div>
              <div style={{ paddingTop: "7px" }}>
                Our course makes you industry standard Our course makes you
              </div>
            </div>
          </div>

          <div className="showCon">
            <div style={{ width: "130px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <FaDraftingCompass style={{ color: "green", fontSize: "60px" }} />
            </div>
            <div style={{ flex: "1", height: "100%", paddingTop: "20px" }}>
              <div style={{ fontWeight: "900" }}>
                Expose Learning
              </div>
              <div style={{ paddingTop: "7px" }}>
                Our course makes you industry standard Our course makes you
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="exploreCon">
        <div className="subExplore">
          <div className="explorehead">Explore The Categories</div>
        </div>
      </div>
      <div className="exploreCard">
        <div className="subCard">
          <div className="card">
            <div style={{ width: "130px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <FaCameraRetro style={{ color: "green", fontSize: "70px" }} />
            </div>
            <div style={{ fontSize: "20px", fontWeight: "900", paddingTop: "10px", textAlign: "center" }}>
              Photography
            </div>
          </div>
          <div className="card">
            <div style={{ width: "130px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <GiTeacher style={{ color: "green", fontSize: "70px" }} />
            </div>
            <div style={{ fontSize: "20px", fontWeight: "900", paddingTop: "10px", textAlign: "center" }}>
              Marketing
            </div>
          </div>
          <div className="card">
            <div style={{ width: "130px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <FaChalkboardUser style={{ color: "green", fontSize: "70px" }} />
            </div>
            <div style={{ fontSize: "20px", fontWeight: "900", paddingTop: "10px", textAlign: "center" }}>
              Design
            </div>
          </div>
          <div className="card">
            <div style={{ width: "130px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <MdDeveloperBoard style={{ color: "green", fontSize: "70px" }} />
            </div>
            <div style={{ fontSize: "20px", fontWeight: "900", paddingTop: "10px", textAlign: "center" }}>
              Development
            </div>
          </div>
          <div className="card">
            <div style={{ width: "130px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <GiTeacher style={{ color: "green", fontSize: "70px" }} />
            </div>
            <div style={{ fontSize: "20px", fontWeight: "900", paddingTop: "10px", textAlign: "center" }}>
              Marketing
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App