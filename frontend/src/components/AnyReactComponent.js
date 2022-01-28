import React from "react";


function AnyReactComponent (prop) {

    // const [open, setOpen] = useState(false)
    const styles = {
        img: {
          width: '25px',
          height: '25px'
        },
        text: {
            fontWeight: '600',
        }
    }


    return (
        <div>
            <img style={styles.img} src="images/marker.svg" alt=""/>
            {/*<p style={styles.text}>{prop.text}</p>*/}
        </div>
    )
}

export default AnyReactComponent