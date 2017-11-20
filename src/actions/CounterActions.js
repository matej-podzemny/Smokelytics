import { INCREMENT, DECREMENT } from './types';

export function onIncrement(points) {
  const total = points + 1;
  return {
    type: INCREMENT,
    payload: total
  }
}

export function onDecrement(points) {
  const total = points - 1;
  return {
    type: DECREMENT,
    payload: total
  }
}
