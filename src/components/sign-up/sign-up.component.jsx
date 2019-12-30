import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = props => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;
  const { signUpStart } = props;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const newSignUpObject = { email, password, displayName };
    signUpStart(newSignUpObject);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          handleChange={e => handleChange(e)}
          label='Display Name'
          required
        />

        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={e => handleChange(e)}
          label='Email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={e => handleChange(e)}
          label='Password'
          required
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={e => handleChange(e)}
          label='Confirm Password'
          required
        />

        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: newSignUpObject => dispatch(signUpStart(newSignUpObject))
});

export default connect(null, mapDispatchToProps)(SignUp);
