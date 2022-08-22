import { REG_USER } from '../actionTypes/userAT';
import { LOGOUT_USER } from '../actionTypes/logoutAT';

const initialState = {
  user: {},
  message: null,
  auth: false 
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REG_USER: 
      if (action.payload.auth) {
        return {
          ...state, 
          user: action.payload.user, 
          message: action.payload.message
        };
      } else {
        return {...state, message: action.payload.message};
      }
    case LOGOUT_USER: 
      return {...state, user: action.payload};
    default:
      return state;
  }
}

export default userReducer;

