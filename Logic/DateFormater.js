export function formatDate(dateString) {
    return {
        year: dateString.substring(0, 4),
        month: dateString.substring(5, 7),
        day: dateString.substring(8, 10)
    }
};

export function formateDateAsString(date) {
    if (date == '') {
        return '00-00-00';
    } else {
        const newDate = formatDate(date);
        return `${newDate.day}-${newDate.month}-${newDate.year}`;
    };

};

export function formateDateYearFirst(date) {
    return `${date.substring(6, 10)}-${date.substring(3, 5)}-${date.substring(0, 2)}`
};

export function timeFormat(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60); // chatGPT was asked how to format time in seconds into a 00:00 layout
    let seconds = Math.floor(timeInSeconds % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    };

    return `${minutes}:${seconds}`;
};

export function minutesToSecond(timeInMinutes) {
    return timeInMinutes / 60;
};

export function formateDateForSQL(date) {
    if (date != null) {
        return `${date.substring(8, 10)}-${date.substring(5, 7)}-${date.substring(0, 4)}`;
    } else {
        return null;
    };

}