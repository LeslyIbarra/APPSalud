import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import PaginaPrincipal from './Screens/PaginaPrincipal';

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { IconRegistry } from '@ui-kitten/components';


export default () => (
  <>
  <IconRegistry icons={[EvaIconsPack]} />
  <ApplicationProvider {...eva} theme={eva.light}>
    <React.Fragment>
    <PaginaPrincipal />
    
    </React.Fragment>
  </ApplicationProvider>
  </>
);