import { INCREMENT, DECREMENT, RESET } from '../actions/types';

const INITIAL_STATE = {
  cigSmokedTotal: 0,
  cigSmoked: 0,
  cigLeft: 20,

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case INCREMENT:
      console.log("-------------------");
      console.log("INCREMENT is called");
      console.log("-------------------");
      return {...state, cigSmoked: action.payload };

    case DECREMENT:
      console.log("-------------------");
      console.log("DECREMENT is called");
      console.log("-------------------");
      return {...state, cigLeft: action.payload };

    case RESET:
      console.log("-------------------");
      console.log("--RESET is called--");
      console.log("-------------------");
      return {...state, cigLeft: 20, cigSmoked: 0, cigSmokedTotal: action.payload };

    default:
      return state;
  }
};
