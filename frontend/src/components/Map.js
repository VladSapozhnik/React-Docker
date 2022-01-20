import React from "react";
import GoogleMapReact from 'google-map-react';
import AnyReactComponent from "./AnyReactComponent";

function Map () {
    const markers = [
        {
            lat: 10.99835602,
            lng: 77.01502627,
            text: 'Content 1'
        },
        {
            lat: 11.99835602,
            lng: 77.01502627,
            text: 'Content 2'
        },
        {
            lat: 12.99835602,
            lng: 77.01502627,
            text: 'Content 3'
        }
    ]


    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                // ref={map => map && map.fitBounds(bounds)}
            >
                {markers.map((item, index) => <AnyReactComponent lat={item.lat} lng={item.lng} text={item.text} key={index}/>)}

                {/*<AnyReactComponent*/}
                {/*    lat={10.99835602}*/}
                {/*    lng={77.01502627}*/}
                {/*    text="My Marker"*/}
                {/*/>*/}
            </GoogleMapReact>
        </div>
    )
}

export default Map