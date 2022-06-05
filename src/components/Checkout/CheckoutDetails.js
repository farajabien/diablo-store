import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  useBreakpointValue,
  Button,
} from '@chakra-ui/react';
import React from 'react';

function CheckoutDetails() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading>Your details</Heading>
        <Text>If you already have an account, click here to login</Text>

        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="John" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Doe" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Email </FormLabel>
              <Input placeholder="john@email.com" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input placeholder="Nairobi" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>MPesa Number</FormLabel>
              <Input placeholder="0712345678" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <Button size="lg" w="full">
              Place Order
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}

export default CheckoutDetails;
