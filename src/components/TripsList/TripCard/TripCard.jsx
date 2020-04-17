import React from 'react';

import { getDateFromIsoDate, getTimeFromIsoDate } from '../../../utils/utils';
import './TripCard.scss';

export function TripCard({ tripData, selected }) {
    return tripData ? (
        <div className={`cardContainer ${selected ? 'selected' : ''}`}>
            <div>
                {'Description: '}
                <span>{tripData.description}</span>
            </div>
            <div>
                {'Driver: '}
                <span>{tripData.driverName}</span>
            </div>
            <div>
                {'Date: '}
                <span>{getDateFromIsoDate(tripData.startTime)}</span>
            </div>
            <div>
                {'Scheduled: '}
                <span>
                    {getTimeFromIsoDate(tripData.startTime)}
                    {' - '}
                    {getTimeFromIsoDate(tripData.endTime)}
                </span>
            </div>
        </div>
    ) : null;
}
