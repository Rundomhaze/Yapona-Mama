import { UPDATE_DATA } from '../actionTypes/updateDataAT';

function updateDataAC(payload) {
  return {
    type: UPDATE_DATA,
    payload
  };
}

export default updateDataAC;
