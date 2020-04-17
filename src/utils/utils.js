export function parseDate(isoDate) {
    return isNaN(new Date(isoDate)) ? null : new Date(isoDate);
}

export function getDateFromIsoDate(isoDate) {
    return parseDate(isoDate) ? parseDate(isoDate).toLocaleDateString() : null;
}

export function getTimeFromIsoDate(isoDate) {
    return parseDate(isoDate)
        ? parseDate(isoDate).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
          })
        : null;
}

export function getDateAndTimeFromIsoDate(isoDate) {
    const date = getDateFromIsoDate(isoDate);
    const time = getTimeFromIsoDate(isoDate);
    return date && time && `${getDateFromIsoDate(isoDate)} ${getTimeFromIsoDate(isoDate)}`;
}
