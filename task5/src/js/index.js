import task from "./taskComponent.js";

let tasks = [];
let editingId = null;

const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const btnAddTask = document.querySelector('.btn-add-task');
const btnCancel = document.querySelector('.modal-btn-cancel');
const taskContainer = document.querySelector(".task-container");

function changeModal(isOpen) {
    modalOverlay.classList.toggle('active', isOpen);
}

function openModalForNewTask() {
    editingId = null;
    modal.reset();
    changeModal(true);
}

function openModalForEdit(id) {
    editingId = id;

    const taskData = tasks.find(t => t.id === id);
    modal.querySelector('.modal-text-task').value = taskData.text;
    modal.querySelector('.checkbox-priority').checked = taskData.isPriority;

    changeModal(true);
}

function renderTasks() {
    taskContainer.innerHTML = "";

    tasks.forEach((t, pos) => {
        const html = pos % 2 === 0
            ? task(t.text, t.isPriority, t.id)
            : task(t.text, t.isPriority, t.id, true);

        taskContainer.insertAdjacentHTML("beforeend", html);
    });
}

function addTask(text, isPriority) {
    tasks.push({
        id: Date.now(),
        text,
        isPriority
    });

    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function saveEditedTask(id, text, isPriority) {
    const taskData = tasks.find(t => t.id === id);
    taskData.text = text;
    taskData.isPriority = isPriority;
    renderTasks();
}

btnAddTask.addEventListener("click", openModalForNewTask);
btnCancel.addEventListener("click", () => changeModal(false));

modal.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(modal);
    const text = data.get('modal-text-task');
    const isPriority = data.get('checkbox-priority') === "on";

    if (editingId) {
        saveEditedTask(editingId, text, isPriority);
        editingId = null;
    } else {
        addTask(text, isPriority);
    }

    modal.reset();
    changeModal(false);
});

document.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest(".delete-btn");
    if (deleteBtn) {
        deleteTask(Number(deleteBtn.dataset.id));
        return;
    }

    const editBtn = e.target.closest(".change-btn");
    if (editBtn) {
        openModalForEdit(Number(editBtn.dataset.id));
        return;
    }
});
