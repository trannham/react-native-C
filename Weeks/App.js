import * as React from 'react';
import {MediaProvider} from './contexts/MediaContext';
import Home from './views/Home';
import Navigator from './navigators/Navigator';

const App = () => {
  return (
    <MediaProvider>
      <Navigator />
    </MediaProvider>
  );
};

export default App;
