// React import
import React, {
  useEffect,
  useState,
} from 'react';

// Chakra ui import
import {
  Stack,
  Input,
  Button,
} from '@chakra-ui/react'

import {
  ArrowForwardIcon,
} from '@chakra-ui/icons'


export default function SearchBar() {
  const [inputSearch, setInputSearch] = useState('');

  const getInputsearch = () => {
    
  };

  useEffect({

  }, [inputSearch]);

  return (
    <div>
      <Stack direction='row' >
        <Input placeholder='extra small size' onChange={({target}) => setInputSearch(target.value)}/>
        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
          Call us
        </Button>
      </Stack>
    </div>
  );
}
