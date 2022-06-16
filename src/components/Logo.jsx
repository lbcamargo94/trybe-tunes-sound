import React from 'react';
import {
  Box,
  Text,
} from '@chakra-ui/react';

export default function Logo() {
  return (
    <Box display='flex' alignItems='center' justifyContent='center'
      w='100%'  h='100%' borderRadius='1rem' m='1rem'>
      <Text className='fontIntroOne' color='#01a101'>Trybe</Text>
      <Text className='fontIntroTwo' color='#f0f8ff'>Tunes</Text>
    </Box>
  );
}
