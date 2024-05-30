// serve per far funzionare l'intellisense su jest
const { test, expect } = require('@jest/globals');

// importo la classe Model dal file model.js preso dalla cartella controllers
const Model = require('../controllers/model');

/*
--- TESTS ---
*/

// Model dovrebbe essere una classe
test('Model dovrebbe essere una classe', () => {
  const model = new Model('data.json');
  expect(model).toBeInstanceOf(Model);
});

// L'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza
test("L'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza", () => {
  const model = new Model('data.json');
  expect(model.fileName).toBe('data.json');
});

// L'istanza di model dovrebbe avere il metodo read
test("L'istanza di model dovrebbe avere il metodo read", () => {
  const model = new Model('data.json');
  expect(typeof model.read).toBe('function');
});

// L'istanza di model dovrebbe avere il metodo add
test("L'istanza di model dovrebbe avere il metodo add", () => {
  const model = new Model('data.json');
  expect(typeof model.add).toBe('function');
});

// read dovrebbe ritornare un array
test('read dovrebbe ritornare un array', () => {
  const model = new Model('data.json');
  const data = model.read();
  expect(Array.isArray(data)).toBe(true);
});

// add dovrebbe aggiungere un elemento all’array dei dati e ritornare tutta la lista
test("add dovrebbe aggiungere un elemento all'array dei dati e ritornare tutta la lista", () => {
  const model = new Model('data.json');
  model.add({ id: 1, name: 'Test' });
  const data = model.read();
  expect(data.length).toBe(1);
  expect(data[0]).toEqual({ id: 1, name: 'Test' });
});
