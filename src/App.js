import React, { useState } from 'react';
import { Div, Icon } from './components/atoms';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App(props) {
  const [modal, setModal] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Div>
        <Icon name="home"/>
      </Div>
    </ThemeProvider>
  );



}

export default App;
