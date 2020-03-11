import React, {useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '../../css/map.css'; 

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const mapInitialConfig = {
    lng: 2.3488,
    lat: 48.8534,
    zoom: 11
}

const Map = props => {
    let mapContainer = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
                container: mapContainer,
                style: 'mapbox://styles/blackdjango/ck6pogpqk163q1irvua8cecfp',
                center: [mapInitialConfig.lng, mapInitialConfig.lat],
                zoom: mapInitialConfig.zoom
            });
            map.on('load', () => {
                const direction = new MapboxDirections({
                    profile: 'mapbox/driving-traffic',
                    unit: 'metric',
                    interactive: false,
                    controls: {
                        inputs: false,
                        instructions: false,
                        profileSwitcher: false
                    },
                    accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
                })
                direction.setOrigin(props.origin);
                direction.setDestination(props.destination);   
            })
        })
        return (
        <>
            <div ref={el => mapContainer = el} className="mapContainer" />
        </>
    );
}

export default Map;
