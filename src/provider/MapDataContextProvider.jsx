import React, { createContext, useState } from 'react';

const defaultValues = {
    tripsData: [],
    selectedTrip: null,
    setSelectedTrip: null,
    selectedTripIndex: null,
};

export const MapDataContext = createContext();

export function MapDataContextProvider(props) {
    const [tripsData, setTripsData] = useState(props.tripsData);
    const [selectedTrip, setSelectedTrip] = useState(null);
    const [selectedTripIndex, setSelectedTripIndex] = useState(null);

    return (
        <MapDataContext.Provider
            value={{
                ...defaultValues,
                tripsData,
                selectedTrip,
                setTripsData,
                setSelectedTrip,
                selectedTripIndex,
                setSelectedTripIndex,
            }}
        >
            {props.children}
        </MapDataContext.Provider>
    );
}
