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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(); // Gives us a unique key
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// get the array, converts it into an object and then returns that object (below function)
export const convertCollectionsSnapshotToMap = collections => {
  // In below transformedCollection, we are adding routeName and id to our collection
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  // Below we are converting collection array to an object
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
