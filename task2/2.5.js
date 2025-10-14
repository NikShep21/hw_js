let personal = {
  director: "Иванов",
  teacher: "Петров",
  assistant: "Сидоров"
};

let personal2 = { ...personal };


personal2.director = "Смирнов";
personal2.teacher = "Кузнецов";
personal2.assistant = "Новиков";


console.log("Персонал 1:\n" + JSON.stringify(personal));
console.log("\nПерсонал 2:\n" + JSON.stringify(personal2));