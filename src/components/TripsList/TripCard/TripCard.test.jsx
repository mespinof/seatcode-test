import React from 'react';
import { shallow } from 'enzyme';
import { TripCard } from './TripCard';
import { tripDataMock } from '../../../api/mocks/tripDataMock';

describe('TripCard', () => {
    it('if tripData has not been specified component should not render', () => {
        const tripCard = shallow(<TripCard />);
        expect(tripCard.type()).toBe(null);
    });
    it('if tripData has been specified component should render correctly', () => {
        const tripCard = shallow(<TripCard tripData={tripDataMock} />);
        expect(tripCard).toBeTruthy();
    });
    it('if tripData has prop selected the container div should have specific class', () => {
        let tripCard;
        tripCard = shallow(<TripCard tripData={tripDataMock} />);
        expect(tripCard.first().hasClass('selected')).toBe(false);
        tripCard = shallow(<TripCard tripData={tripDataMock} selected />);
        expect(tripCard.first().hasClass('selected')).toBe(true);
    });
});
