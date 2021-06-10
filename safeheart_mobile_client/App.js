import React from 'react';
import {Provider, DefaultTheme} from 'react-native-paper';
import {Predict} from './src/screens/predict';

const App = () => {
  return (
    <Provider theme={DefaultTheme}>
      <Predict />
    </Provider>
  );
};
export default App;
