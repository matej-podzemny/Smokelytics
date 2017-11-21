import { INCREMENT, DECREMENT, RESET } from './types';

export function onIncrement(cigSmoked) {
  const total = cigSmoked + 1;
  return {
    type: INCREMENT,
    payload: total
  }
}

export function onDecrement(cigLeft) {
  const total = cigLeft - 1;
  return {
    type: DECREMENT,
    payload: total
  }
}


// NOT FINISHED!
export function onReset(cigSmoked) {
  const total = cigSmoked
  return {
    type: RESET,
    payload: total,
  }
}
