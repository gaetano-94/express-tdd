// serve per far funzionare l'intellisense su jest
const { test, expect } = require('@jest/globals');

// importo il file utils.js dalla cartella controllers
const { createSlug } = require('../controllers/utils');

/*
--- TESTS ---
*/

// createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () => {
  const result = createSlug('My First Post', []);
  expect(typeof result).toBe('string');
});

// createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
  const result = createSlug('My First Post', []);
  expect(result).toBe(result.toLowerCase());
});

// createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -

// createSlug dovrebbe incrementare di 1 lo slug quando esiste già

// createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato

// createSlug dovrebbe lanciare un errore se manca l'array dei post
