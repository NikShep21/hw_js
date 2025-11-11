export function createCell(day = '', isToday = false, className = '') {
  const td = document.createElement('td');
  td.textContent = day;

  if (isToday) td.classList.add('today');
  if (className) td.classList.add(className);

  return td;
}

export function createRow(cells) {
  const tr = document.createElement('tr');
  cells.forEach(cell => tr.appendChild(cell));
  return tr;
}
