import axios from 'axios';

export async function getTrips() {
    let response;
    try {
        response = await axios.get(
            'https://europe-west1-metropolis-fe-test.cloudfunctions.net/api/trips'
        );
    } catch (error) {
        console.error(error);
    }

    return response ? response.data : null;
}

export async function getStop(stopId) {
    let response;
    try {
        response = await axios.get(
            `https://europe-west1-metropolis-fe-test.cloudfunctions.net/api/stops/${stopId}`
        );
    } catch (error) {
        console.error(error);
    }
    return response ? response.data : null;
}

export async function getStops(tripData) {
    let stopsData = [];
    tripData.stops.forEach(async stop => {
        try {
            let stopData = await getStop(stop.id);
            stopsData.push(stopData);
        } catch (error) {
            console.error(error);
        }
    });
    return stopsData;
}
