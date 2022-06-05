import { Box, useBreakpointValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import Navbar from './Navigation/Navbar';
import Sidebar from './Navigation/Sidebar';

const smVariant = { navigation: 'drawer', navigationButton: true };
const mdVariant = { navigation: 'sidebar', navigationButton: false };

function MainLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box ml={!variants?.navigationButton && 200}>
        <Navbar
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />
        {children}
      </Box>
    </>
  );
}

export default MainLayout;
