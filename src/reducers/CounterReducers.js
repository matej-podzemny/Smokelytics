import { INCREMENT, DECREMENT } from '../actions/types';

const INITIAL_STATE = {
  points: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
    console.log("-------------------");
    console.log("INCREMENT is called");
    console.log("-------------------");
      return {...state, points: action.payload };
    case DECREMENT:
      console.log("-------------------");
      console.log("DECREMENT is called");
      console.log("-------------------");
      return {...state, points: action.payload };
    default:
      return state;
  }
};
