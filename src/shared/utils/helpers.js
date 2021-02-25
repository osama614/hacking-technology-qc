import months from '../constants/months';


function getMonthName(month){
    return months[month].ar;
}

export function formatDate(timestamp) {
    const date = new Date(timestamp);
    const dateStr = date.toUTCString();
    const dateValues = dateStr.split(' ');
    const day = dateValues[1];
    const year = dateValues[3]
    const month = getMonthName(date.getMonth());
    return `${day} ${month} ${year}`;
  }