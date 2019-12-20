import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={email}
            required
            handleChange={e => this.handleChange(e)}
            label='Email'
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            required
            handleChange={e => this.handleChange(e)}
            label='Password'
          />

          <CustomButton type='submit'>Submit Form</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
