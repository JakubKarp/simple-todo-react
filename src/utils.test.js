import { secondsToHourMinuteSecond } from './utils';

test('tu opisujemy jakie jest wejście a jakie powinno być wyjście - to się tylko wyświetla', () => {
    expect(secondsToHourMinuteSecond(3600)).toBe("01:00:00")
})

test('0 da 00:00:00', () => {
    expect(secondsToHourMinuteSecond(0)).toBe("01:00:00")
})