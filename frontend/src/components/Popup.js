import React, {useState} from "react";

function Popup() {
    const [popup, setPopup] = useState(false)

/*    const styles = () => {
       return {
           display: popup ? 'block' : 'none'
       }
    }*/

    const stylesPopup = () => {
        return {
            display: popup ? 'block' : 'none'
        }
    }

    return (
        <div>
            <div className="btn" onClick={() => setPopup(true)}>open</div>
            <div>
                <div style={stylesPopup()} className="popup container">
                    <div onClick={() => setPopup(false)} className="close">X</div>
                    <div className="h3">Popup</div>
                </div>
                <div style={stylesPopup()} onClick={() => setPopup(false)} className="shadow"></div>
            </div>
        </div>
    )
}

export default Popup