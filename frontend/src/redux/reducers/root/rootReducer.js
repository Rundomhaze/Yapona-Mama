import { combineReducers } from 'redux';
import userReducer from '../userReducer';
import cartReducer from '../cartReducer';
import adminReducer from '../adminReducer';
import filterReducer from '../filterReducer';

const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  cart: cartReducer,
  filterFood: filterReducer, 
});

export default rootReducer;
