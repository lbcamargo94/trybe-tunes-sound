// React import
import React from 'react';

// Component import
import Logo from './Logo';

// Chakra ui import
import {
  Box,
  Avatar,
  HStack,
} from '@chakra-ui/react';

export default function Header() {
  return (
    <HStack w="100%" justifyContent="space-between" px="3rem" py="1rem">
      {/* Header Logo */}
      <Box h="3rem">
        <Logo />
      </Box>
      {/* Header Avatar */}
      <Box h="3rem">
        <Avatar name="Test Profile" src="https://bit.ly/broken-link" />
      </Box>
    </HStack>
  );
}
