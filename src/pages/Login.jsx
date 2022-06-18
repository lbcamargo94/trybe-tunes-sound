import React from 'react';
// chakra-ui imports
import {
  // Box,
  // Button,
  // Checkbox,
  Flex,
  // FormControl,
  // FormLabel,
  // Heading,
  // Input,
  // Link,
  // Stack,
} from '@chakra-ui/react';
// components imports
import FormLogin from '../components/FormLogin';
import Logo from '../components/Logo'

export default function Login() {
  return (
    <Flex direction='column' alignItems='center' justify='center' p='1rem' m='0 auto' w='360px' h='100%'
      maxW='640px'>
      <Logo />
      <FormLogin />
    </Flex>
  );
}
