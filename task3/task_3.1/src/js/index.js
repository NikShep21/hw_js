import { getDaysInMonth, getFirstDayOfMonth } from "./utils.js";
import { createCell, createRow } from "./components.js";

const monthInfo = document.querySelector('.month-info');
const caption = document.querySelector('caption');

const monthNames = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const now = new Date();
renderCalendar(now);


function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = new Date();


  caption.textContent = `${monthNames[month]} ${year}`;

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

 
  const fragment = buildCalendarGrid({ daysInMonth, firstDay, today, month, year });

  monthInfo.innerHTML = '';
  monthInfo.appendChild(fragment);
}


function buildCalendarGrid({ daysInMonth, firstDay, today, month, year }) {
  let day = 1;
  const fragment = document.createDocumentFragment();

  for (let week = 0; week < 6; week++) {
    const cells = [];

    for (let weekday = 1; weekday <= 7; weekday++) {
    
      if ((week === 0 && weekday < firstDay) || day > daysInMonth) {
        cells.push(createCell());
      } else {
        const isToday =
          day === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear();

        cells.push(createCell(day, isToday));
        day++;
      }
    }

    fragment.appendChild(createRow(cells));

    if (day > daysInMonth) break;
  }

  return fragment;
}
