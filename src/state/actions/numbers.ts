import * as types from './types';

interface SetGeneratedNumbers {
  type: typeof types.SET_GENERATED_NUMBERS,
  time: number,
  numbers: [number, number, number]
}
/**
 * Forwards action to reducer to save generated numbers to state
 * @param {array} numbers - The list of generated numbers
 */
export function setGeneratedNumbers(numbers: array): SetGeneratedNumbers {
  return {
    type: types.SET_GENERATED_NUMBERS,
    time: Math.floor(Date.now()),
    numbers
  };
}
