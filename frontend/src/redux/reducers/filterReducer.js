import { FILTER_INGR } from '../actionTypes/filterAT';

const initialState = {
  filterFood: [],
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_INGR: 
    return {
      ...state,
      filterFood: action.payload
    }
    default:
    return state;
  }
}


export default filterReducer;
