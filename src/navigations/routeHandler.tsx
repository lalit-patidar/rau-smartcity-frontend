import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import NonAuthenticated from './screens/nonAuth/';
import DrawerNaigators from './Navigators/userDisplay/userHome';
import SupplierDisplay from './Navigators/supplierDisplay/supplierScreen';

const MainScreen = (props:any) => {
  let screen = <NonAuthenticated />;

  if (props.user && props.token) {
    screen = <DrawerNaigators />;
  }

  if (props.supplier) {
    if (props.supplierToken) {
      screen = <SupplierDisplay />;
    }
  }

  return <NavigationContainer>{screen}</NavigationContainer>;
};
