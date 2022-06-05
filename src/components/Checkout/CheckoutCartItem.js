import { GridItem, Heading, SimpleGrid, Image, Text } from '@chakra-ui/react';
import React from 'react';

function CheckoutCartItem({ title, img, desc, price }) {
  return (
    <SimpleGrid columns={4} columnGap={3} rowGap={6} w="full">
      <GridItem colSpan={1}>
        <Image src={img} alt={title} />
      </GridItem>
      <GridItem colSpan={2}>
        <Heading size="xs">{title}</Heading>
        <Text>{desc}</Text>
      </GridItem>
      <GridItem colSpan={1}>
        <Text>Ksh {price}</Text>
      </GridItem>
    </SimpleGrid>
  );
}

export default CheckoutCartItem;
