import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers/root/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
