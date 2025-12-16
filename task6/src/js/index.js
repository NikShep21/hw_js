import { MineSweeper } from "./game.js";
import { renderBoard } from "./ui/renderBoard.js";
import { initControls } from "./controls/controls.js";

const mine = new MineSweeper(13, 13, 30);
const root = document.querySelector(".board");

mine.boardInit();
root.style.gridTemplateColumns = `repeat(${mine.widthBoard}, 40px)`;

const render = (cursor) => renderBoard(mine, root, cursor);

const cursor = initControls({ root, mine, render });

render(cursor);

document.addEventListener("mine.step", (e) => {
  if (mine.isWon !== null) return;

  const { x, y } = e.detail;

  mine.makeMove(x, y);
  render(cursor);

  if (mine.isWon !== null) {
    document.dispatchEvent(
      new CustomEvent("mine.end", {
        detail: { result: mine.isWon ? "win" : "lose" }
      })
    );
  }
});

document.addEventListener("mine.end", (e) => {
  alert(e.detail.result === "win" ? "WIN" : "LOSE");
});
