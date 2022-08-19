import { REG_USER } from '../actionTypes/userAT';


function regUserAC(payload) {
  return {
    type: REG_USER,
    payload
  };
}

export default regUserAC;
