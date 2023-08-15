import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = compose(
    applyMiddleware(sagaMiddleware)
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store; 