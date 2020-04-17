import { createMarkers } from './mapMarkers';

export const zoomToRoute = (routeLine, mapInstance) => {
    const bounds = new window.google.maps.LatLngBounds();
    const points = routeLine.getPath().getArray();
    points.forEach(point => {
        bounds.extend(point);
    });
    mapInstance.fitBounds(bounds);
};

export const calcRoute = (selectedTrip, mapRouteLine, mapInstance, mapMarkers) => {
    const decodedRoute = window.google.maps.geometry.encoding.decodePath(selectedTrip.route);
    console.log(decodedRoute);
    mapRouteLine.current = new window.google.maps.Polyline({
        path: decodedRoute,
        strokeColor: '#ea5d1a',
        strokeWeight: 3,
        geodesic: true,
    });

    zoomToRoute(mapRouteLine.current, mapInstance.current);
    createMarkers(selectedTrip, mapMarkers, mapInstance);
    mapRouteLine.current.setMap(mapInstance.current);
};
