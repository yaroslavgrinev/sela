import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import projectsReducer from './reducers/projects';
import projectSaga from './sagas/project';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const enhancers = [
    applyMiddleware(...middlewares),
    window.devToolsExtension && process.env.NODE_ENV === 'development'
        ? window.devToolsExtension()
        : f => f,
  ];

  const store = createStore(
      projectsReducer,
      initialState,
      compose(...enhancers)
  );

  sagaMiddleware.run(projectSaga);

  return store;
}
