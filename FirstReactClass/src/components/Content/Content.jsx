import { HiMiniShoppingBag } from "react-icons/hi2"
import { FaBoxTissue } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";

const content = () => {
    return (
        <div>
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
        </div>
    )
}

export default content