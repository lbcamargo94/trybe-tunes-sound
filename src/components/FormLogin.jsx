import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// chakra-ui imports
import {
  Box,
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
import { useState } from 'react';

export default function FormLogin() {
  const [loginEmail,setLoginEmail] = useState(false);
  const [loginPass, setLoginPass] = useState(false);
  const [loginDisabled, setLoginDisabled] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    const validLogin = () => {
      console.log(`State Pass: ${loginPass}`);
      console.log(`State Email: ${loginEmail}`);
      return loginEmail && loginPass;
    }
    console.log(`validLogin: ${validLogin()}`);
    setLoginDisabled(validLogin);
  }, [loginEmail, loginPass]);

  const passwordValidation = (pass) => {
    console.log(`passwordValidation: ${pass}`);
    const biggerThen = 5;
    pass.length > biggerThen ? setLoginPass(true) : setLoginPass(false);
  };

  const emailValidation = (email) => {
    // console.log(`emailValidation: ${email}`);
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isValid = regex.test(email);
    console.log(`emailValidation: ${isValid}`);
    setLoginEmail(isValid);
  };

  return (
    <Stack minW='360px' w='100%' h='100%' justifyContent="center" flex='1' alignItems="center" display='flex'>
      <Flex p='8' align='center' justify='center'>
        <Stack spacing='4' w='full' maxW='md'>
          <Heading fontSize='2xl'>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(event) => emailValidation(event.target.value)}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(event) => passwordValidation(event.target.value) }/>
          </FormControl>
          <Stack spacing='6'>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align='start'
              justify='space-between'>
              <Checkbox>Remember me</Checkbox>
              <Link color='blue.500'>Forgot password?</Link>
            </Stack>
            <Box display='flex' direction='column' alignItems='center' justify='center'>
              <Button
                m='1rem' w='100%' h='2.5rem' color='#f0f8ff' bg='#01a101'
                variant='solid'
                onClick={() => navigate("/register")}
                disabled={!loginDisabled}            >
                Sign in
              </Button>
              <Button
                m='1rem' w='100%' h='2.5rem' color='#f0f8ff' bg='#01a101'
                variant='solid'
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
