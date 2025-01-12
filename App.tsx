// =========================================================================//
//                          The Sneakers User App                           //
// =========================================================================//
//                      REACT NATIVE VERSION: 0.75.4                        //
//               STATE MANAGEMENT: REACT REDUX & REDUX PERSIST              //
//                      DEVELOPER'S PROFILE: ING CHINA                      //
//                   GitHub: https://github.com/Ing-China                   //
// =========================================================================//

import React from 'react';
import AppNavigation from './src/navigations';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';
import {persistedStore, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import i18n from './src/translations/i18n';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <I18nextProvider i18n={i18n}>
          <AppNavigation />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
