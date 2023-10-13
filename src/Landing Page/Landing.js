import React from 'react';
import '../index.css';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';
import Apps from '../Apps';
import BodyShorthandExample from '../Container/Container2';
import CustomCardBod from '../Container/why';

const MyRoute = () => {
    return (
      <>
        <ChakraProvider>
          <App />
          <BodyShorthandExample />
          <CustomCardBod />
          <Apps />
        </ChakraProvider>
      </>
    );
  };

  export default MyRoute;