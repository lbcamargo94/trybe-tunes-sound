import React from 'react';
import {
  HStack,
  Text,
} from '@chakra-ui/react';

export default function Logo() {
  return (
    <HStack alignItems='center' justifyContent='center'
      w='100%'  h='100%'>
      <Text className='fontIntroOne' color='#01a101'>Trybe</Text>
      <Text className='fontIntroTwo' color='#f0f8ff'>Tunes</Text>
    </HStack>
  );
}
