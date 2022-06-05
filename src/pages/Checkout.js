import { Container, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import CheckoutCart from '../components/Checkout/CheckoutCart';
import CheckoutDetails from '../components/Checkout/CheckoutDetails';

function Checkout() {
  return (
    <Flex
      h={{ base: 'auto', md: '100vh' }}
      py={[0, 5, 10]}
      direction={{ base: 'column-reverse', md: 'row' }}
    >
      <CheckoutDetails />
      <CheckoutCart />
    </Flex>
  );
}

export default Checkout;
