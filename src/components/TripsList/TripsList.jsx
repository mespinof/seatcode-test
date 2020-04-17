import React, { useContext, useEffect } from 'react';

import { TripCard } from './TripCard/TripCard';
import { MapDataContext } from '../../provider/MapDataContextProvider';

export function TripsList() {
    const { tripsData, selectedTrip, setSelectedTrip } = useContext(MapDataContext);

    const handleClick = index => {
        setSelectedTrip(index);
    };

    return (
        <>
            {tripsData.map((trip, index) => {
                return (
                    <div key={'trip' + index} id={'trip' + index} onClick={() => handleClick(index)}>
                        <TripCard tripData={trip} selected={index === selectedTrip}></TripCard>
                    </div>
                );
            })}
        </>
    );
}
