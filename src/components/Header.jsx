import logo from "../assets/logo.svg"
import Navigation from "./Navigation";


const Header = ({ShowSide}) => {
    
    return (
        <header className= "header">            
            {/* {show?<img src={logo} alt="logo" /> :<>hola</>}   */}
    
            <Navigation/>
        </header>
    )
}
export default Header;