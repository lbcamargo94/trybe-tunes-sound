// React import
import React from 'react';

// Chakra ui import
import {
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

import {
  ChevronRightIcon,
} from '@chakra-ui/icons'

export default function NavBar() {
  return (
    <HStack alignItems="center">
      <Breadcrumb
        spacing='8px'
        separator={<ChevronRightIcon color='gray.500' />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Search</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Favorites</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Profile</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </HStack>
  );
}
