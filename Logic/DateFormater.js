/**
 * @file a file with different methods for formatting dates as different modules require different date formate to function
 * @module DateFormater
 **/

/**Takes a dateString and returns an object dividing each part into an attribute of the object.
 * @param {string} dateString - a date string in the layout of yyyy-mm-dd
 * @returns {object} - an object with each part of the date seperated into attributes
 */
export function formatDate(dateString) {
  return {
    year: dateString.substring(0, 4),
    month: dateString.substring(5, 7),
    day: dateString.substring(8, 10),
  };
}

/**
 * Takes a date string and returns a formatted string
 * @param {string} dateString - a date string in the layout of yyyy-mm-dd
 * @returns {string} - a date string in the layout of dd-mm-yy
 */
export function formateDateAsString(dateString) {
  if (dateString == '') {
    return '00-00-00';
  } else {
    const newDate = formatDate(dateString);
    return `${newDate.day}-${newDate.month}-${newDate.year}`;
  }
}

/**
 * Takes a date string and returns it year first format
 * @param {string} date a date string in the layout of dd-mm-yyyy
 * @returns {string} - a date string in the layout of yyyy-mm-dd
 */
export function formateDateYearFirst(date) {
  return `${date.substring(6, 10)}-${date.substring(3, 5)}-${date.substring(0, 2)}`;
}

/**
 * Takes a given in seconds and returns it in a mm:ss format
 * @param {number} timeInSeconds - number representing seconds
 * @returns {string} - a string displays a time in mm:ss format
 */
export function timeFormat(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60); // chatGPT was asked how to format time in seconds into a 00:00 layout: https://chat.openai.com/share/717b5583-f766-4e16-8e50-2f7abae30edd
  let seconds = Math.floor(timeInSeconds % 60);

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return `${minutes}:${seconds}`;
}

/**
 * A function to turn a given amount of minutes into just seconds.
 * @param {number} timeInMinutes - a given amount of time in minutes
 * @returns {number} - the passed time in seconds
 */
export function minutesToSeconds(timeInMinutes) {
  return timeInMinutes * 60;
}

/**
 * Formats date so it may be compared with what is fetched from SQL quieres.
 * @param {string} date dd-mm-yy
 * @returns {string} - a string in the format of yy-mm-dd
 * @returns {null} - if date is null, null is returned
 */
export function formateDateForSQL(date) {
  if (date != null) {
    return `${date.substring(8, 10)}-${date.substring(5, 7)}-${date.substring(0, 4)}`;
  } else {
    return null;
  }
}
