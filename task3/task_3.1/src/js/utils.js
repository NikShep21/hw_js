export function getDaysInMonth(year, month) {

  return new Date(year, month + 1, 0).getDate();
}
export function getFirstDayOfMonth(year, month) {
  let day = new Date(year, month, 1).getDay(); 
  if (day === 0) day = 7; 
  return day;
}