import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  CHECK_USER_SESSION
} from './user.types';

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = message => ({
  type: SIGN_IN_FAILURE,
  payload: message
});

export const emailSignInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
});

export const userSignOutStart = () => ({
  type: SIGN_OUT_START
});

export const userSignOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const userSignOutFailure = error => ({
  type: SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = userCredentials => ({
  type: SIGN_UP_START,
  payload: userCredentials
});

export const userSignUpSuccess = () => ({
  type: SIGN_UP_SUCCESS
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: SIGN_UP_FAILURE,
  payload: error
});
