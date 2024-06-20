import {createSlice} from '@reduxjs/toolkit';

export const trafficLightSlice = createSlice({
  name: 'trafficLight',
  initialState: 'red',
  reducers: {
    changeColor: state => {
      if (state === 'red') return 'green';
      if (state === 'green') return 'yellow';
      if (state === 'yellow') return 'red';
    },
  },
});

export const {changeColor} = trafficLightSlice.actions;

export default trafficLightSlice.reducer;
