import React, { useEffect, useState, useContext } from 'react';

import './MainPage.scss';
import { getTrips } from '../api/service';
import { TripsList } from '../components/TripsList/TripsList';
import { MapDataContext } from '../provider/MapDataContextProvider';
import { Map } from '../components/Map/Map';

export function MainPage() {
    const { setTripsData } = useContext(MapDataContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const tripsDataResponse = await getTrips();
            setTripsData(tripsDataResponse);
            setLoading(false);
        })();
    }, [setTripsData]);

    return loading ? (
        <div className="loadingScreen">
            <div>Loading...</div>
        </div>
    ) : (
        <div className="pageContainer">
            <div className="tourSection">
                <TripsList />
            </div>
            <div className="mapSection">
                <Map />
            </div>
        </div>
    );
}
