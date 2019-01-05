// Returns the day of the week for the given date.
function dayName(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday", "Sunday"];
    return daysOfTheWeek[date.getDay()];
}