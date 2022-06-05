import { Heading, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import CheckoutCartItem from './CheckoutCartItem';

function Cart() {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading>Your Cart</Heading>

        <CheckoutCartItem
          img="https://cdn.vox-cdn.com/thumbor/qAu1L7GtOBGRT6FyUZHiMqC1m0c=/0x0:1998x1332/1200x800/filters:focal(840x507:1158x825)/cdn.vox-cdn.com/uploads/chorus_image/image/70896210/akrales_210917_4760_0166.0.jpg"
          title="Product 1"
          desc="des 1"
          price={250}
        />
        <CheckoutCartItem
          img="https://bit.ly/dan-abramov"
          title="Product 1"
          desc="des 1"
          price={250}
        />
      </VStack>
    </VStack>
  );
}

export default Cart;
