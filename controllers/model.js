class Model {
  constructor(fileName) {
    this.fileName = fileName;
    this.data = [];
  }

  read() {
    return this.data;
  }

  add(item) {
    this.data.push(item);
    return this.data;
  }
}

module.exports = Model;
