// React import
import React from 'react';

// Chakra ui import
import {
  Stack,
} from '@chakra-ui/react';

// Componentes import
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

export default function Search() {
  return (
    <Stack direction={'column'} w="100%" h= "100%">
      <Header/>
      <NavBar />
      <SearchBar />
    </Stack>
  );
}
