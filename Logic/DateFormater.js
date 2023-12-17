export function formatDate(dateString) {
    return {
        year: dateString.substring(0, 4),
        month: dateString.substring(5, 7),
        day: dateString.substring(8, 10)
    }
};