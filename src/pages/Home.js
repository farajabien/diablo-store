import {
  Container,
  GridItem,
  Heading,
  Text,
  SimpleGrid,
  useBreakpointValue,
  Stack,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import ProductCard from '../components/Products/ProductCard';

import { useQuery } from 'react-query';

const mainUrl = `http://diablostore.herokuapp.com/Product_list/`;

function Home() {
  const [extension, setExtension] = useState(``);

  const fetchProducts = async ({ queryKey }) => {
    try {
      const res = await axios.get(mainUrl + queryKey[1]);

      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const { data, status } = useQuery(['products', extension], fetchProducts);

  const colSpan = useBreakpointValue({ base: 3, lg: 3, md: 4, sm: 6, xs: 12 });

  return (
    <Container maxW="container.xl">
      <Heading py={10}>All Products</Heading>
      {status === 'loading' && <Heading>Loading...</Heading>}
      {status === 'error' && (
        <Heading>Error loading products. Please refresh</Heading>
      )}
      {status === 'success' && (
        <>
          <SimpleGrid
            columns={12}
            columnGap={{ base: '4', md: '6' }}
            rowGap={{ base: '8', md: '10' }}
          >
            <GridItem colSpan={6}>
              <Stack align="end">
                <Button
                  disabled={data?.data.previous === null}
                  onClick={() => {
                    setExtension(() => `?limit=5`);
                  }}
                >
                  Prev
                </Button>
              </Stack>
            </GridItem>

            <GridItem colSpan={6}>
              <Stack align="start">
                <Button
                  disabled={data?.data.next === null}
                  onClick={() => {
                    setExtension(() => `?limit=5&offset=5`);
                  }}
                >
                  Next
                </Button>
              </Stack>
            </GridItem>

            {data.data.results.map(product => (
              <GridItem key={product.id} colSpan={colSpan}>
                <ProductCard product={product} />
              </GridItem>
            ))}
          </SimpleGrid>
        </>
      )}
    </Container>
  );
}

export default Home;
