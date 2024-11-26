import { combineReducers } from '@reduxjs/toolkit';
import artistReducer from './ArtistRedux/artistSlice';

const rootReducer = combineReducers({
  artist: artistReducer,
});

export default rootReducer;
