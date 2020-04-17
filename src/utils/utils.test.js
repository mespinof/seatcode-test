import { parseDate, getDateAndTimeFromIsoDate, getDateFromIsoDate, getTimeFromIsoDate } from './utils';

describe('parseDate', () => {
    it('parses the date when passed through props otherwise returns null', () => {
        let parsedDate = parseDate('2018-12-18T09:00:00.000Z');
        expect(parsedDate.getFullYear()).toBe(2018);
        parsedDate = parseDate('Random string');
        expect(parsedDate).toBe(null);
    });
});

describe('getDateAndTimeFromIsoDate', () => {
    it('gets the date and time formatted from an iso date otherwise returns null', () => {
        let dateAndTime = getDateAndTimeFromIsoDate('2018-12-18T09:00:00.000Z');
        expect(dateAndTime).toBe('2018-12-18 10:00');
        dateAndTime = getDateAndTimeFromIsoDate('Random string');
        expect(dateAndTime).toBe(null);
    });
});

describe('getDateFromIsoDate', () => {
    it('gets the date formatted from an iso date otherwise returns null', () => {
        let date = getDateFromIsoDate('2018-12-18T09:00:00.000Z');
        expect(date).toBe('2018-12-18');
        date = getDateFromIsoDate('Random string');
        expect(date).toBe(null);
    });
});

describe('getTimeFromIsoDate', () => {
    it('gets the date formatted from an iso date otherwise returns null', () => {
        let time = getTimeFromIsoDate('2018-12-18T09:00:00.000Z');
        expect(time).toBe('10:00');
        time = getTimeFromIsoDate('Random string');
        expect(time).toBe(null);
    });
});
