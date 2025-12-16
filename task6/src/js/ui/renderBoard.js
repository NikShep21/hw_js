import { CreateCell } from "./CreateCell.js";

export function renderBoard(mine, root, cursor) {
  root.innerHTML = "";

  for (let y = 0; y < mine.heightBoard; y++) {
    for (let x = 0; x < mine.widthBoard; x++) {
      const state = mine.board[y][x];
      let cell;

      if (state.isOpen) {
        if (state.isBomb) {
          cell = CreateCell.createBombCell(x, y);
        } else {
          cell = CreateCell.createOpenCell(
            x,
            y,
            state.count > 0 ? state.count : null
          );
        }
      } else if (state.isFlag) {
        cell = CreateCell.createFlagCell(x, y);
      } else {
        cell = CreateCell.createCloseCell(x, y);
      }

      if (cursor.x === x && cursor.y === y) {
        cell.classList.add("focus");
      }

      root.append(cell);
    }
  }
}
