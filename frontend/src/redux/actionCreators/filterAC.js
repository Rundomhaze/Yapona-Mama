import { FILTER_INGR } from '../actionTypes/filterAT';


function filterFoodAC(payload) {
  return {
    type: FILTER_INGR, 
    payload
  }
}

export default filterFoodAC;
