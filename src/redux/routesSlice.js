import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    routes: [
        { key: '1', name: 'Маршруд - 1', waypoints: [[59.84660399, 30.29496392], [59.82934196, 30.42423701], [59.83567701, 30.38064206]] },
        { key: '2', name: 'Маршруд - 2', waypoints: [[59.82934196, 30.42423701], [59.82761295, 30.41705607], [59.84660399, 30.29496392]] },
        { key: '3', name: 'Маршруд - 3', waypoints: [[59.83567701, 30.38064206], [59.84660399, 30.29496392], [59.82761295, 30.41705607]] },
    ],
    selectedRouteKey: null,
};

const routesSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        selectRoute: (state, action) => {
            state.selectedRouteKey = action.payload;
        },
    },
});

export const { selectRoute } = routesSlice.actions;

export default routesSlice.reducer;
