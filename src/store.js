import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers/index';
// import rootSaga from './saga';
// import createSagaMiddleware from 'redux-saga';

// const SagaMiddleware = createSagaMiddleware()

const store = createStore(reducers);
// const store = createStore(reducers,applyMiddleware(SagaMiddleware));
// SagaMiddleware.run(rootSaga);

export default store;