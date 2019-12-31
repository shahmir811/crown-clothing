import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import { FETCH_COLLECTIONS_START } from './shops.types';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}
// =========================== Listeners function below ===========================

export function* fetchCollectionsStart() {
  // below, first argument is type and the second is the generator function that will run in response of FETCH_COLLECTIONS_START
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

// =========================== export cart sagas below ===========================

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
