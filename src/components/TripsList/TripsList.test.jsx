import React from 'react';
import { shallow, mount } from 'enzyme';
// import { TripsList } from './TripsList';
import { tripsDataMock } from '../../api/mocks/tripsDataMock';
import { MapDataContextProvider } from '../../provider/MapDataContextProvider';
import { TripsList } from './TripsList';

const mockSetSelectedTrip = jest.fn();

const wrapper = mount(
    <MapDataContextProvider tripsData={tripsDataMock} setSelectedTrip={mockSetSelectedTrip}>
        <TripsList />
    </MapDataContextProvider>,
);

describe('TripsList', () => {
    it('renders correctly when tripsData is specified in the provider', () => {
        expect(wrapper).toBeTruthy();
    });
    it('triggers setSelectedTrip on click', () => {
        let tripWrapper = wrapper.find('TripsList').childAt(0);
        tripWrapper.simulate('click');
        wrapper.update();
        tripWrapper = wrapper.find('TripsList').childAt(0);
        expect(tripWrapper.find('TripCard').prop('selected')).toBe(true);
        expect(
            tripWrapper
                .find('TripCard')
                .childAt(0)
                .hasClass('selected'),
        );
    });
});
