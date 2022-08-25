import { REG_USER } from '../actionTypes/userAT';
import { LOGOUT_USER } from '../actionTypes/logoutAT';
import { UPDATE_DATA } from '../actionTypes/updateDataAT';

const initialState = {
  user: {},
  message: null,
  auth: false 
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REG_USER: 
      if (action.payload.auth) {
        return {
          ...state, 
          user: action.payload.user, 
          message: action.payload.message
        };
      } 
      return { ...state, message: action.payload.message };
    case LOGOUT_USER: 
      return { ...state, user: action.payload };
    case UPDATE_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        }
      };
    default:
      return state;
  }
};

export default userReducer;
