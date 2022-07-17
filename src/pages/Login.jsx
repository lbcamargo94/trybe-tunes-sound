import React from 'react';
// chakra-ui imports
import { Flex } from '@chakra-ui/react';
// components imports
import FormLogin from '../components/FormLogin';
import Logo from '../components/Logo'

export default function Login() {
  return (
    <Flex direction='column' alignItems='center' justify='center' p='1rem' m='0 auto'
      w='360px' maxW='640px'>
      <Logo />
      <FormLogin />
    </Flex>
  );
}
