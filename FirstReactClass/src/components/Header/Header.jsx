import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
const Header = () => {
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
        </div>
    )
}

export default Header