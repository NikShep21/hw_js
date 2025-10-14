let subjects = {
  // Как я понял, по условию задачи надо хранить именно как строку, но не уверен
  list: "Математика, Физика, Информатика",

  _getSubjectsArray() {
    return this.list.split(", ");
  },

  addSubject(subj) {
    let arr = this._getSubjectsArray();
    if (!arr.includes(subj)) arr.push(subj);
    this.list = arr.join(", ");
  },

  removeSubject(subj) {
    let arr = this._getSubjectsArray();
    const index = arr.indexOf(subj);
    if (index !== -1) arr.splice(index, 1);
    this.list = arr.join(", ");
  }
};



subjects.addSubject("Химия");
subjects.removeSubject("Физика");

console.log(subjects.list); 
