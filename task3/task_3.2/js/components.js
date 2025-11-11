export function createCell(content = '', className = '') {
  const td = document.createElement('td');
  td.textContent = content;
  if (className) td.classList.add(className);
  return td;
}

export function createRow(cells) {
  const tr = document.createElement('tr');
  cells.forEach(cell => tr.appendChild(cell));
  return tr;
}
