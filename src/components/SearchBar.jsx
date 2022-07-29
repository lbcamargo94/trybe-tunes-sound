// React import
import React, {
  // useEffect,
  useState,
} from 'react';

// Chakra ui import
import {
  Button,
  HStack,
  Input,
  Stack,
} from '@chakra-ui/react'

import {
  ArrowForwardIcon,
} from '@chakra-ui/icons'

// Services import 

export default function SearchBar() {
  const [inputSearch, setInputSearch] = useState('');
  console.log(inputSearch);

  return (
    <HStack w="100%" h="100%">
      <Stack direction='row' >
        <Input
          placeholder='extra small size'
          onChange={({target}) => setInputSearch(target.value)}
        />
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme='teal'
          variant='outline'
          // onClick={'OK'}
        >
          Search
        </Button>
      </Stack>
    </HStack>
  );
}
