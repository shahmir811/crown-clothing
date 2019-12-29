import React, { Component } from 'react';
import { connect } from 'react-redux';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const userCredentials = { email, password, displayName };
    signUpStart(userCredentials);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            handleChange={e => this.handleChange(e)}
            label='Display Name'
            required
          />

          <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={e => this.handleChange(e)}
            label='Email'
            required
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={e => this.handleChange(e)}
            label='Password'
            required
          />

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={e => this.handleChange(e)}
            label='Confirm Password'
            required
          />

          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
