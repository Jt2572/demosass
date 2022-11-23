import items from "../assets/items.js";
import logo from "../assets/logo.svg"
const Sidebar = ({ ShowSide, isOpen, closeSide }) => {


    return (

        <>

            {isOpen ?
                <div className='sidebar__show__cont' onClick={closeSide}>

                    <div className={ShowSide ? "navbar__hide" : "navbar__show"}>
                        <img src={logo} alt="logo" />
                    </div>

                    <nav className="sidebar__itemscont">

                        {items.map(i =>
                            <ul className="sidebar__show__items">
                                {i.title}
                            </ul>
                        )}
                    </nav>
                </div>

                : <></>
            }

        </>

    )
}
export default Sidebar;