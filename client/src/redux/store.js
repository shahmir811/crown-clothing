import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; //persistStore allows our browser to cache REDUX store depending on our give conditions
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'; // for viewing redux flow in chrome
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
let makingStore = null;

if (process.env.NODE_ENV === 'development') {
  // during development
  middlewares.push(logger);
  makingStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
} else {
  // during production
  makingStore = createStore(rootReducer, applyMiddleware(...middlewares));
}

export const store = makingStore;

sagaMiddleware.run(rootSaga);

// persistor is the persisted version of REDUX store
export const persistor = persistStore(store);

export default { store, persistor };
