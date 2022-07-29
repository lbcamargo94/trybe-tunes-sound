// React import
import React from 'react';

// Component import
import Logo from './Logo';

// Chakra ui import
import {
  Box,
  Flex,
  Avatar,
} from '@chakra-ui/react'

export default function Header() {
  return (
    <>
      <Flex
        alignItems="center"
      >
        {/* Header Logo */}
        <Box>
          <Logo />
        </Box>
        {/* Header Avatar */}
        <Box>
          <Avatar name='Test Profile' src='https://bit.ly/tioluwani-kolawole' />
        </Box>
      </Flex>
    </>
  );
}
