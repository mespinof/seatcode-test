import { getDateAndTimeFromIsoDate } from './utils';
import { getStop } from '../api/service';

export const createMarkers = (selectedTrip, mapMarkers, mapInstance) => {
    const iconBase = 'http://maps.google.com/mapfiles/kml/paddle/';
    const markers = [];
    selectedTrip.stops.forEach(stop => {
        markers.push(stop);
    });
    markers.unshift(selectedTrip.origin);
    markers.push(selectedTrip.destination);

    markers.forEach(async (marker, index) => {
        let markerData = marker.id ? await getStop(marker.id) : null;
        console.log(markerData);
        let markerInstance = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(marker.point?._latitude, marker.point?._longitude),
            ...(index === 0
                ? {
                      icon: iconBase + 'A.png',
                      title: 'Origin',
                  }
                : index === markers.length - 1
                ? { icon: iconBase + 'B.png', title: 'Destination' }
                : { title: markerData && markerData.address }),
        });

        let contentInfo =
            index === 0
                ? `<div>Origin</div>
            <div>Address: ${selectedTrip.origin.address} </div>`
                : index === markers.length - 1
                ? `<div>Destination</div>
            <div>Address: ${selectedTrip.destination.address} </div>`
                : markerData
                ? `<div>
            <div>Username: ${markerData.userName}</div>
            <div>Address: ${markerData.address}</div>
            <div>Stop time: ${getDateAndTimeFromIsoDate(markerData.stopTime)}</div>
            <div>Price: ${markerData.price}€</div>
            <div>${markerData.paid ? 'Paid' : 'Unpaid'}</div>
        </div>`
                : `<div>Unable to load data for this stop</div>`;

        let infoWindow = new window.google.maps.InfoWindow({
            content: contentInfo,
        });

        mapMarkers.current.push(markerInstance);
        markerInstance.addListener('click', function() {
            infoWindow.open(mapInstance.current, markerInstance);
        });
        markerInstance.setMap(mapInstance.current);
    });
};

export const clearMarkers = mapMarkers => {
    mapMarkers.current.forEach(marker => {
        marker.setMap(null);
    });
};
