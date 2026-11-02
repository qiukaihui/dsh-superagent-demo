import test from 'node:test';
import assert from 'node:assert/strict';
import { sum } from '../src/sum.js';

test('整数相加', () => {
  assert.equal(sum(1, 2), 3);
});
