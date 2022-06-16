import React from 'react';
import { useNavigate } from 'react-router-dom';
// chakra-ui imports
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';
// components imports
import Logo from '../components/Logo';

export default function FormLogin() {
  let navigate = useNavigate();

  return (
    <Stack minH='100vh' justify="center" flex='1' align="center">
      <Logo />
      <Flex p='8' align='center' justify='center'>
        <Stack spacing='4' w='full' maxW='md'>
          <Heading fontSize='2xl'>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing='6'>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align='start'
              justify='space-between'>
              <Checkbox>Remember me</Checkbox>
              <Link color='blue.500'>Forgot password?</Link>
            </Stack>
            <Button
              m='1rem' w='12.5rem' h='2.5rem' color='#f0f8ff' bg='#01a101'
              variant='solid'
              onClick={() => navigate("/register")}
              disabled=''
            >
              Sign in
            </Button>
            <Button
              m='1rem' w='12.5rem' h='2.5rem' color='#f0f8ff' bg='#01a101'
              variant='solid'
              onClick={() => navigate("/register")}
              disabled=''
            >
              Register
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
