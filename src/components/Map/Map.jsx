import React, { useRef, useContext, useEffect, useCallback } from 'react';

import { MapDataContext } from '../../provider/MapDataContextProvider';
import { useScript } from '../../hooks/useScript';
import { calcRoute } from '../../utils/mapRoutes';
import { clearMarkers } from '../../utils/mapMarkers';
import './Map.scss';

export const Map = () => {
    const [loaded, error] = useScript(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyD1aCwKJ42a5xoT7lk4EEgdHueW0vMY8TA&libraries=geometry'
    );
    const { tripsData, selectedTrip } = useContext(MapDataContext);
    const mapCanvasRef = useRef(null);
    const mapInstance = useRef(null);
    const mapRouteLine = useRef(null);
    const mapMarkers = useRef([]);

    const initMap = useCallback(() => {
        mapInstance.current = new window.google.maps.Map(mapCanvasRef.current, {
            center: { lat: 0, lng: 0 },
            zoom: 3,
            disableDefaultUI: true
        });
    }, []);

    const initRoutes = useCallback(() => {
        if (selectedTrip !== null) {
            mapRouteLine.current && mapRouteLine.current.setMap(null);
            calcRoute(
                tripsData[selectedTrip],
                mapRouteLine,
                mapInstance,
                mapMarkers
            );
        }
    }, [tripsData, selectedTrip]);

    useEffect(() => {
        if (loaded) {
            initMap();
        }
    }, [loaded, initMap]);

    useEffect(() => {
        if (mapMarkers.current.length >= 1) {
            console.log('clear');
            clearMarkers(mapMarkers);
        }
        initRoutes();
    }, [initRoutes]);

    return !error ? (
        <div className="mapContainer" ref={mapCanvasRef}></div>
    ) : (
        <div>Error loading the map</div>
    );
};
