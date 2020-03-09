import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = () => {
    const [viewport, setviewport] = useState({
        latitude: 48.866667,
        longitude: 2.333333,
        zoom: 14,
        bearing: 0,
        pitch: 0
    })
    return (
    <>
        <MapGL 
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/blackdjango/ck6pogpqk163q1irvua8cecfp"
        onViewportChange={setviewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        />
    </>
    );
}

export default Map;