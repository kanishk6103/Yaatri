export function formatDate(inputDate) {
    // Parse the input date string
    const [day, month, year] = inputDate.split('-').map(Number);

    // Array of month names
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Get the month name
    const monthName = months[month - 1];

    // Get the day suffix
    const daySuffix = (() => {
        if (day === 1 || day === 21 || day === 31) return "st";
        if (day === 2 || day === 22) return "nd";
        if (day === 3 || day === 23) return "rd";
        return "th";
    })();

    // Format the date
    const formattedDate = `${day}${daySuffix} ${monthName}, ${year}`;

    return formattedDate;
}

export function formatDuration(inputDuration) {
    // Parse the input duration string
    const [hoursStr, minutesStr] = inputDuration.split(':').map(Number);

    // Format the duration
    let formattedDuration = '';
    if (hoursStr > 0) {
        formattedDuration += `${hoursStr} h`;
    }
    if (minutesStr > 0) {
        if (formattedDuration !== '') {
            formattedDuration += ' ';
        }
        formattedDuration += `${minutesStr} m`;
    }

    return formattedDuration;
}

export function addDays(inputDate, daysToAdd) {
    // Parse the input date string
    const [day, month, year] = inputDate.split('-').map(Number);

    // Create a new Date object
    const dateObject = new Date(year, month - 1, day);

    // Add days
    dateObject.setDate(dateObject.getDate() + daysToAdd);

    // Format the new date
    const formattedDate = formatDate(`${dateObject.getDate()}-${dateObject.getMonth() + 1}-${dateObject.getFullYear()}`);

    return formattedDate;
}

export function apiDateFormat(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
}

// Pass timestamp in millis
export const convertCurrentDate = (timestampinMillis) => {
    let dateFullFormat = new Date(timestampinMillis);
    let timestamp = dateFullFormat;
    let date = new Date(timestamp);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let formattedDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
    return formattedDate;
}

// Pass the dates in "2024-05-14" format
export const differenceFromCurrent = (current, timestamp) => {
    // Convert dates to milliseconds since Unix epoch
    let millisPerDay = 24 * 60 * 60 * 1000;
    let timestamp1 = new Date(current).getTime();
    let timestamp2 = new Date(timestamp).getTime();

    // Calculate the difference in days
    let differenceInDays = Math.round(Math.abs((timestamp1 - timestamp2) / millisPerDay));
    return differenceInDays;
}

// Example usage
// const train_date = "26-05-2023";
// const formattedDate = formatDate(train_date);
// console.log("Formatted Date:", formattedDate);

// const daysToAdd = 3;
// const newFormattedDate = addDays(train_date, daysToAdd);
// console.log("New Formatted Date after adding", daysToAdd, "days:", newFormattedDate);

// // Test the function
// const inputDuration = "17:55";
// const formattedDuration = formatDuration(inputDuration);
// console.log(formattedDuration); // Output: "17 hours, 55 minutes"
