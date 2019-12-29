import React, { Component } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart({ email, password });

    //   try {
    //     const { email, password } = this.state;

    //     await auth.signInWithEmailAndPassword(email, password);

    //     this.setState({ email: '', password: '' });
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;

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

          <div className='buttons'>
            <CustomButton type='submit'>SIGN IN</CustomButton>
            <CustomButton
              type='button'
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: emailAndPassword =>
    dispatch(emailSignInStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);
