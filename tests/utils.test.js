const { test, expect } = require('@jest/globals');

const { createSlug } = require('../controllers/utils');

test('createSlug dovrebbe ritornare una stringa', () => {
  const result = createSlug('My First Post', []);
  expect(typeof result).toBe('string');
});
