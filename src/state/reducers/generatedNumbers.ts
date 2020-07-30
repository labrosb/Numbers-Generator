import * as types from '../actions/types';

/** Reducer handles actions related to numbers generation */

interface Dataset { types: string, list: array, time: number }

export default function generatedNumbers(
  state = null,
  action: Pick<Dataset>
): Partial<Dataset> {
  switch (action.type) {
    case types.SET_GENERATED_NUMBERS:
      return { list: action.numbers, time: action.time };

    default:
      return state;
  }
}
