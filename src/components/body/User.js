import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

function User() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(
    JSON.parse(window.sessionStorage.getItem('isAuth'))
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [deliveryAdress, setDeliveryAdress] = useState('');
  const [subscription, setSubscription] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  useEffect(() => {
    if (isAuth?.status === null || isAuth?.status === false) {
      navigate('/');
    }
    setSubscription(isAuth.subscription);
  }, []);

  const handleInputChange = (event, type) => {
    switch (type) {
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'passwordCheck':
        setPasswordCheck(event.target.value);
        break;
      case 'deliveryAdress':
        setDeliveryAdress(event.target.value);
        break;
      case 'subscription':
        setSubscription(event.target.checked);
        break;
      default:
        break;
    }
  };

  const submitUserData = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    params.append('id', isAuth.id);
    if (name) params.append('name', name);
    if (email) params.append('email', email);
    if (password) params.append('password', password);
    if (deliveryAdress) params.append('deliveryAdress', deliveryAdress);
    if (subscription) params.append('subscription', subscription);
    axios.put('http://localhost:3001/update/user', params).then((response) => {
      const result = response.data;

      if (
        result !==
        'We collected data from the error and we will reach you as fast as possible'
      ) {
        setIsAuth(result);
        window.sessionStorage.setItem(
          'isAuth',
          JSON.stringify({ status: true, ...result })
        );
        setWarningMessage('Your changes have been saved!');
      } else {
        setWarningMessage(result);
      }
    });
  };

  return (
    <div className="userForm">
      <div className="formContainer">
        <form>
          <p>Hello User. Those are your informations.</p>
          <p>Would you like to modify any of them?</p>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type={'text'}
            placeholder={isAuth.name || '----'}
            value={name}
            onChange={(event) => {
              handleInputChange(event, 'name');
            }}
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type={'email'}
            placeholder={isAuth.email}
            value={email}
            onChange={(event) => {
              handleInputChange(event, 'email');
            }}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type={'password'}
            placeholder={'-----'}
            value={password}
            onChange={(event) => {
              handleInputChange(event, 'password');
            }}
          ></input>
          <label htmlFor="passwordCheck">Re-enter the password:</label>
          <input
            name="passwordCheck"
            type={'password'}
            placeholder={'-----'}
            value={passwordCheck}
            onChange={(event) => {
              handleInputChange(event, 'passwordCheck');
            }}
          ></input>
          <label htmlFor="deliveryAdress">Delivery Adress:</label>
          <input
            name="deliveryAdress"
            type={'text'}
            placeholder={isAuth.deliveryAdress || '----'}
            value={deliveryAdress}
            onChange={(event) => {
              handleInputChange(event, 'deliveryAdress');
            }}
          ></input>
          <span>
            <label htmlFor="subscription">Subscribe to our newsletter?</label>
            <input
              name="subscription"
              type={'checkbox'}
              value={subscription}
              onChange={(event) => {
                handleInputChange(event, 'subscription');
              }}
              checked={subscription}
            ></input>
          </span>
          <Button
            onClick={(event) => {
              submitUserData(event);
            }}
            classes={'btn primary'}
          >
            Submit
          </Button>
          {warningMessage && <h2>{warningMessage}</h2>}
        </form>
      </div>
    </div>
  );
}

export default User;
