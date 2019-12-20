import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBgugDBNSJ-rmaodzCynSim3SzpmTHc5UQ',
  authDomain: 'crown-clothing-db-31f09.firebaseapp.com',
  databaseURL: 'https://crown-clothing-db-31f09.firebaseio.com',
  projectId: 'crown-clothing-db-31f09',
  storageBucket: 'crown-clothing-db-31f09.appspot.com',
  messagingSenderId: '23457739908',
  appId: '1:23457739908:web:948c7ce9658a7a8af87ed1',
  measurementId: 'G-81SYQGF1G0'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
