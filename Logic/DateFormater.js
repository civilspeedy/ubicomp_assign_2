export function formatDate(dateString) {
    return {
        year: dateString.substring(0, 4),
        month: dateString.substring(5, 7),
        day: dateString.substring(8, 10)
    }
};

export function timeFormat(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60); // chatGPT was asked how to format time in seconds into a 00:00 layout
    let seconds = Math.floor(timeInSeconds % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    };

    return `${minutes}:${seconds}`;
};