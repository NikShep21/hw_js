import { MineSweeper } from "./game.js";
import { CreateCell } from "./createCell.js";

function renderBoard(mine, root) {
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
            x, y,
            state.count > 0 ? state.count : null
          );
        }
      } else if (state.isFlag) {
        cell = CreateCell.createFlagCell(x, y);
      } else {
        cell = CreateCell.createCloseCell(x, y);
      }

      root.append(cell);
    }
  }
}

const mine = new MineSweeper(13, 13, 30);
const root = document.querySelector(".board");

mine.boardInit();
root.style.gridTemplateColumns = `repeat(${mine.widthBoard}, 40px)`;
renderBoard(mine, root);


root.addEventListener("click", (e) => {
  const cell = e.target.closest(".cell");
  if (!cell) return;

  const x = Number(cell.dataset.x);
  const y = Number(cell.dataset.y);

  document.dispatchEvent(
    new CustomEvent("mine.step", { detail: { x, y } })
  );
});

root.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  const cell = e.target.closest(".cell");
  if (!cell) return;

  const x = Number(cell.dataset.x);
  const y = Number(cell.dataset.y);

  mine.changeFlag(x, y);
  renderBoard(mine, root);
});


document.addEventListener("mine.step", (e) => {
  if (mine.isWon !== null) return;

  const { x, y } = e.detail;

  mine.makeMove(x, y);
  renderBoard(mine, root);

  if (mine.isWon !== null) {
    document.dispatchEvent(
      new CustomEvent("mine.end", {
        detail: { result: mine.isWon ? "win" : "lose" }
      })
    );
  }
});


document.addEventListener("mine.end", (e) => {
  const { result } = e.detail;

  if (result === "win") alert("WIN");
  else alert("LOSE");
});
