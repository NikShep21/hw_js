export default function task(text, priority,id, isBacground = false) {
    return `
        <div class="task ${isBacground ? '':'bg-task'}" data-id="${id}">
            <div class="task-info">
                <input class="checkbox-task" type="checkbox">
                ${priority ? '<img src="./assets/hiprio.svg" alt="high priority">' : ''}
                <label class="text-task">${text}</label>
            </div>
            <div class="task-changes">
                <button class="change-btn" data-id="${id}">
                    <img src="./assets/pencil.svg" alt="change">
                </button>
                <button class="delete-btn" data-id="${id}">
                    <img src="./assets/trashbin.svg" alt="trashbin">
                </button>
            </div>
        </div>
    `;
}
