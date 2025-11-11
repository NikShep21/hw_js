import { createCell, createRow } from "./components.js";

const tableBody = document.querySelector('.tbody');

buildMultiplicationTable();

function buildMultiplicationTable() {
  const fragment = document.createDocumentFragment();

 
  const headerCells = [createCell('', 'header')]; 
  for (let i = 1; i <= 10; i++) {
    headerCells.push(createCell(i, 'header'));
  }
  fragment.appendChild(createRow(headerCells));


  for (let i = 1; i <= 10; i++) {
    const cells = [createCell(i, 'header')]; 
    for (let j = 1; j <= 10; j++) {
      cells.push(createCell(i * j));
    }
    fragment.appendChild(createRow(cells));
  }

  tableBody.appendChild(fragment);
}
