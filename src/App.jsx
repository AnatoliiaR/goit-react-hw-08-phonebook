import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import NavBar from 'components/NavBar/NavBar';
import UserRoutes from 'UserRoutes';
import Auth from './components/Auth/Auth';

import { store, persistor } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Auth>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <NavBar />
            <UserRoutes />
          </BrowserRouter>
        </Auth>
      </PersistGate>
    </Provider>
  );
};

export default App;
