import React from 'react';
import store from "./store";
import { Provider } from "react-redux";
import StarWarsMovie from './screens/StarWarsMovie';

export default class StarWarsMoviesApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StarWarsMovie />
      </Provider>
    ) 
  }
}