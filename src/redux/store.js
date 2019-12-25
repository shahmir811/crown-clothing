import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; //persistStore allows our browser to cache REDUX store depending on our give conditions
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'; // for viewing redux flow in chrome

import rootReducer from './root-reducer';

const middlewares = [logger];

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// persistor is the persisted version of REDUX store
export const persistor = persistStore(store);

export default { store, persistor };
