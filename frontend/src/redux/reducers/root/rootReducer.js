import { combineReducers } from 'redux';
import userReducer from '../userReducer';
import cartReducer from '../cartReducer';
import adminReducer from '../adminReducer';

const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  cart: cartReducer,

});

export default rootReducer;
