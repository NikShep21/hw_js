export function initControls({ root, mine, render }) {
  const cursor = { x: 0, y: 0 };

  root.addEventListener("click", (e) => {
    const cell = e.target.closest(".cell");
    if (!cell) return;

    const x = Number(cell.dataset.x);
    const y = Number(cell.dataset.y);

    cursor.x = x;
    cursor.y = y;

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

    cursor.x = x;
    cursor.y = y;

    mine.changeFlag(x, y);
    render(cursor);
  });

  document.addEventListener("keydown", (e) => {
    if (mine.isWon !== null) return;

    let handled = true;

    switch (e.key) {
      case "ArrowUp":
        cursor.y = Math.max(0, cursor.y - 1);
        break;
      case "ArrowDown":
        cursor.y = Math.min(mine.heightBoard - 1, cursor.y + 1);
        break;
      case "ArrowLeft":
        cursor.x = Math.max(0, cursor.x - 1);
        break;
      case "ArrowRight":
        cursor.x = Math.min(mine.widthBoard - 1, cursor.x + 1);
        break;

      case "Enter":
      case " ":
        if (e.ctrlKey) {
          mine.changeFlag(cursor.x, cursor.y);
        } else {
          document.dispatchEvent(
            new CustomEvent("mine.step", {
              detail: { x: cursor.x, y: cursor.y }
            })
          );
        }
        break;

      default:
        handled = false;
    }

    if (handled) {
      e.preventDefault();
      render(cursor);
    }
  });

  return cursor;
}
