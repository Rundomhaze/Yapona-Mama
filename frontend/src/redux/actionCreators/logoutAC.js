import { LOGOUT_USER } from '../actionTypes/logoutAT';

export default function logoutAC(payload) {
  return {
    type: LOGOUT_USER,
    payload
  };
}
