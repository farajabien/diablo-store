import { Box, Center, IconButton, Text, Flex } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Navbar = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <Flex p={4} justify="center" pos="relative" position="static">
      <Box>
        {showSidebarButton && (
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Text fontSize="xl" mx={2}>
        DiabloStore
      </Text>

      <Box flex="1" />
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default Navbar;
