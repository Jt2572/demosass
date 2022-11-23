import {  useState } from "react"
import Header from "./Header";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar";

const Navigation = () => {
    const [ShowSide, setShowSide] = useState(false)


    const closeSide = () => {
        setShowSide(false)
    };

    const toggleMenu = () => {
        setShowSide(!ShowSide)
    }
    

    return (
        <>
            <Navbar ShowSide={ShowSide} toggleMenu={toggleMenu} />
        

            {!ShowSide ?
                <div className="sidebar__show" >
                </div>
                : <div className="sidebar__hide sidebar__show">
                    <Sidebar isOpen={ShowSide} closeSide={closeSide} toggleMenu={toggleMenu} />

                    <div className="header__hide">
                        {/* <div className="header__show">
                            {<Header ShowSide={ShowSide} />}
                        </div> */}
                    </div>

                </div>
            }
        </>



    )
}

export default Navigation;