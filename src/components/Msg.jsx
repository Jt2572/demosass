import rightArrow from "../assets/rightArrow.svg"
import leftArrow from "../assets/leftArrow.svg"
import { useState } from "react"
const Msg = () => {

    const [showMsg, setShowMsg] = useState(false)

    const handleClick = () => {
        showMsg ? setShowMsg(false) : setShowMsg(true)
    }

    return (

        <>
            {!showMsg ?
                <div className="msg__show" >
                    <button name="jackets" className="msg__btn" onClick={(e) => handleClick(e)}>
                        Mas información
                        <img src={rightArrow} alt="rightArrow" />
                    </button>
                </div>
                : <div className="msg__hide">
                    ...en proceso de desarrollo
                    <button onClick={handleClick} className="msg__btnsm" >
                        <img src={leftArrow} alt="" /> regresar
                    </button>
                </div>
            }

        </>


    )
}

export default Msg;