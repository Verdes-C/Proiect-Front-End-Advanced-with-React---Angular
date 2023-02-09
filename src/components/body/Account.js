import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { login } from '../../store';

function Account({ scope }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(
    useSelector((state) => {
      return state.isAuth;
    })
  );

  useEffect(() => {
    if (isAuth?.status) {
      navigate('/');
    }
  }, [isAuth]);

  const navigate = useNavigate();

  const sendLogin = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    axios.post('http://localhost:3001/login', params).then((response) => {
      const result = response.data;
      if (result !== 'The passwords do not match') {
        dispatch(login({ status: true, ...result }));
        setIsAuth({ status: true, ...result });
      }
    });
  };

  const sendRegister = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    axios.post('http://localhost:3001/register', params).then((response) => {
      setMessage(response.data);
    });
  };

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const renderForm = (scope) => {
    if (scope === 'login') {
      return (
        <div className="formContainer">
          <form>
            <label htmlFor="account">Account:</label>
            <input
              placeholder="Email"
              type={'email'}
              name={'account'}
              value={email}
              onChange={(event) => {
                handleEmailInputChange(event);
              }}
            ></input>
            <label htmlFor="password">Password:</label>
            <input
              placeholder="Password"
              type={'password'}
              name={'password'}
              value={password}
              onChange={(event) => {
                handlePasswordInputChange(event);
              }}
            ></input>
            <Button
              onClick={(event) => {
                sendLogin(event);
              }}
              classes={'btn primary'}
            >
              Login
            </Button>
          </form>
        </div>
      );
    }
    if (scope === 'register') {
      return (
        <div className="formContainer">
          <form>
            <label htmlFor="email">Email:</label>
            <input
              type={'email'}
              name={'email'}
              value={email}
              onChange={handleEmailInputChange}
            ></input>
            <label htmlFor="password">Password:</label>
            <input
              placeholder="Password"
              type={'password'}
              name={'password'}
              value={password}
              onChange={(event) => {
                handlePasswordInputChange(event);
              }}
            ></input>
            <Button
              onClick={(event) => sendRegister(event)}
              classes={'btn primary'}
            >
              Register
            </Button>
            {message && <p style={{ fontSize: '1rem' }}>{message}</p>}
            {message && (
              <Button classes={'btn primary'}>
                <Link to={'/login'}>Login</Link>
              </Button>
            )}
          </form>
        </div>
      );
    }
  };
  return (
    <div className="accountForm">
      {renderForm(scope)}
      {/* {isAuth?.status && redirect('/')} */}
    </div>
  );
}

export default Account;
