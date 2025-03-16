import { useState } from 'react';
import Input from './Input.jsx';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const[didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
    setEnteredValues({
      email: '',
      password: '',
    })
  }

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 8;

  function handleInputChange(identifier, value) {
    setEnteredValues(previousValues => ({
      ...previousValues,
      [identifier]: value
    }));
    setDidEdit(previousEdit => ({
      ...previousEdit,
      [identifier]: false,
    }))
  }

  function handleInputBlur(identifier) {
    setDidEdit(previousEdit => ({
      ...previousEdit,
      [identifier]: true,
    }))
  }

  return (
    <form onSubmit={handleSubmit} >
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="Email" 
          id="email" 
          type="email" 
          name="email" 
          onChange={(event) => handleInputChange('email', event.target.value)} 
          value={enteredValues.email} 
          onBlur={() => handleInputBlur('email')}
          error={emailIsInvalid && 'Please enter a valid email!'}
        />

        <Input 
          label="Password" 
          id="password" 
          type="password" 
          name="password" 
          onChange={(event) => handleInputChange('password', event.target.value)} 
          value={enteredValues.password}
          onBlur={() => handleInputBlur('password')}
          error={passwordIsInvalid && 'Please enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
