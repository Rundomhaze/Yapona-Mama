import React, { useState } from "react";
import { signupUser, signinUser } from '../../reducers/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import './Auth.css';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState('signin');
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.user);
  const authenticate = () => {
    if (auth == 'signin') {
      dispatch(signinUser({ email, password }))
    } else {
      dispatch(signupUser({ email, password }))
    }
  }

  return (


    <div className="container center" >
      {loading &&
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      }
      <h1>please {auth}!</h1>
      {error &&
        <h5>{error}</h5>
      }
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {
        auth == "signin" ?
          <h6 onClick={() => setAuth('signup')}>Dont have an account ?</h6> :
          <h6 onClick={() => setAuth('signin')}>Already have an account?</h6>
      }

      <button className="btn #ff4081 pink accent-2" onClick={() => authenticate()}>{auth}</button>

    </div>

  )
}


export default Auth;



