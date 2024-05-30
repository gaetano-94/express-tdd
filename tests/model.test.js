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

// L'istanza di model dovrebbe avere il metodo read

// L'istanza di model dovrebbe avere il metodo add

// ead dovrebbe ritornare un array

// add dovrebbe aggiungere un elemento all’array dei dati e ritornare tutta la lista
