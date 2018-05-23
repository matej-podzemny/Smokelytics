import { INCREMENT, DECREMENT, RESET, MODAL } from '../actions/types';

const INITIAL_STATE = {
  cigSmoked: 0,
  cigLeft: 20,
  modalVisible: false,
  total: 562,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case MODAL:
      console.log("-------------------");
      console.log("-------MODAL-------");
      console.log("-------------------");
      return {...state, modalVisible: action.payload };

    case INCREMENT:
      console.log("-------------------");
      console.log("INCREMENT is called");
      console.log("-------------------");
      return {...state,
        cigSmoked: action.payload,
        total: state.total +  1,
      };

    case DECREMENT:
      console.log("-------------------");
      console.log("DECREMENT is called");
      console.log("-------------------");
      return {...state, cigLeft: action.payload };

    case RESET:
      console.log("-------------------");
      console.log("--RESET is called--");
      console.log("-------------------");
      return {...state, cigLeft: 20, cigSmoked: 0 };

    default:
      return state;
  }
};
