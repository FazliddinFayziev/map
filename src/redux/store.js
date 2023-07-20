import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import routesReducer from './routesSlice';

// Sagas
function* rootSaga() {
    yield all([]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        route: routesReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
