import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SidebarContent = ({ onClick }) => (
  <VStack py={20}>
    <Button onClick={onClick} w="100%">
      Home
    </Button>
    <Button onClick={onClick} w="100%">
      About
    </Button>
    <Button onClick={onClick} w="100%">
      Contact
    </Button>
  </VStack>
);

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === 'sidebar' ? (
    <Box position="fixed" left={0} p={5} w="200px" top={0} h="100%">
      {/* <SidebarContent onClick={onClose} /> */}
      <VStack py={20} onClick={onClose}>
        <Link to="/">
          <Button w="100%">Home </Button>
        </Link>
        <Link to="/checkout">
          <Button w="100%">Checkout </Button>
        </Link>

        <Link to="/cart">
          <Button w="100%">Cart </Button>
        </Link>
      </VStack>
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>DiabloStore</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
