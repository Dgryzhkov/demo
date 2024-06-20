import {configureStore} from '@reduxjs/toolkit';
import trafficLightReducer from './entities/trafficLight/slice';
import {Provider} from 'react-redux';
import React from 'react';
import TrafficLightScreen from './screen/TrafficLightScreen';

const store = configureStore({
  reducer: {
    trafficLight: trafficLightReducer,
  },
});
const App = () => {
  return (
    <Provider store={store}>
      <TrafficLightScreen />
    </Provider>
  );
};
export default App;
