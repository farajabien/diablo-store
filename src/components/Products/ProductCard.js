import {
  AspectRatio,
  Box,
  Skeleton,
  Stack,
  Image,
  useBreakpointValue,
  useColorModeValue,
  HStack,
  Text,
  Button,
  Link,
} from '@chakra-ui/react';
import React from 'react';

function ProductCard({ product }) {
  return (
    <Stack>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={product.image}
            alt={product.title}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="2">
          <Text
            fontWeight="medium"
            color={useColorModeValue('gray.700', 'gray.400')}
          >
            {product.title}
          </Text>
          <Text as="span" fontWeight="medium">
            Ksh {product.price}
          </Text>
        </Stack>
      </Stack>
      <Stack align="start">
        <Button>Add to cart</Button>
      </Stack>
    </Stack>
  );
}

export default ProductCard;
