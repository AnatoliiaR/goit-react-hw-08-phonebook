import { configureStore } from '@reduxjs/toolkit';
// import persistStore from 'redux-persist/es/persistStore';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
export default store;
