import MenuIcon from "../components/MenuIcon";
import items from "../assets/items";
import logo from "../assets/logo.svg"
import Header from "./Header";
import { useEffect } from "react";

const Navbar = ({ ShowSide, toggleMenu }) => {
useEffect(()=>{
console.log(ShowSide)
},[ShowSide])
    return (
        
        <header className="navbar">

            <div className= {!ShowSide? "navbar__hide":"navbar__show" }>
                {/* <img src={logo} alt="logo" /> */}
            </div>
            
            <div className= {ShowSide? "navbar__hide":"navbar__show" }>
                <img src={logo} alt="logo" />
            </div>
            
            
            {/* <div className=" navbar__">

            </div> */}

            <table width="70%">
                <tr>
                    {items.map(i =>
                        <td className="navbar__items">{i.title}</td>
                    )}
                </tr>
                <div className="navbar__button" onClick={toggleMenu}>
                    <MenuIcon />
                </div>

            </table>

        </header>
    )
}

export default Navbar;