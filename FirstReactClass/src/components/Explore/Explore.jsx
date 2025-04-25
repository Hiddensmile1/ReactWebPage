import { FaCameraRetro } from "react-icons/fa"
import { GiTeacher } from "react-icons/gi";
import { FaChalkboardUser } from "react-icons/fa6"
import { MdDeveloperBoard } from "react-icons/md";

const Explore = () => {
    return (
        <div>
            <div className="exploreCon">
                <div className="subExplore">
                    <div className="explorehead">Explore The Categories</div>
                </div>
            </div>
            <div className="exploreCard">
                <div className="subCard">
                    <div className="card">
                        <div style={{ width: "200px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <FaCameraRetro style={{ color: "green", fontSize: "120px" }} />
                        </div>
                        <div style={{ fontSize: "20px", fontWeight: "900", paddingTop: "10px", textAlign: "center" }}>
                            Photography
                        </div>
                    </div>
                    <div className="card">
                        <div style={{ width: "200px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <GiTeacher style={{ color: "green", fontSize: "120px" }} />
                        </div>
                        <div style={{ fontSize: "20px", fontWeight: "900", paddingTop: "10px", textAlign: "center" }}>
                            Marketing
                        </div>
                    </div>
                    <div className="card">
                        <div style={{ width: "200px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <FaChalkboardUser style={{ color: "green", fontSize: "120px" }} />
                        </div>
                        <div style={{ fontSize: "20px", fontWeight: "900", paddingTop: "10px", textAlign: "center" }}>
                            Design
                        </div>
                    </div>
                    <div className="card">
                        <div style={{ width: "200px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <MdDeveloperBoard style={{ color: "green", fontSize: "120px" }} />
                        </div>
                        <div style={{ fontSize: "20px", fontWeight: "900", paddingTop: "10px", textAlign: "center" }}>
                            Development
                        </div>
                    </div>
                    <div className="card">
                        <div style={{ width: "200px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <GiTeacher style={{ color: "green", fontSize: "120px" }} />
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

export default Explore 