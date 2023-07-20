import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPolylineData(action) {
    try {
        const route = action.payload;
        const { waypoints } = route;

        const url = `https://example-api.com/polylines?waypoints=${JSON.stringify(waypoints)}`;

        const response = yield call(axios.get, url);

        const polylineData = response.data;


    } catch (error) {
        console.log(error)
    }
}


function* watchSelectRoute() {
    yield takeLatest('route/selectRoute', fetchPolylineData);
}


export default function* rootSaga() {
    yield all([watchSelectRoute()]);
}
