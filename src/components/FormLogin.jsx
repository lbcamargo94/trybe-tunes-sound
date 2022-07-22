import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// chakra-ui imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

// Import forms validation
import {
  emailValidation,
  passwordValidation,
} from '../helpers/validationRegisterForms';

export default function FormLogin() {
  // States
  const [email,setEmail] = useState('');
  const [validEmail,setValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [validForms, setValidForms] = useState(false);

  // React Touter Dom useNavigate
  let navigate = useNavigate();

  useEffect(() => {
    // Validation forms email and password fields
    function validationFields(email, password) {
      setValidEmail(emailValidation(email));
      setValidPassword(passwordValidation(password));
      validEmail && validPassword ? setValidForms(true) : setValidForms(false);
    }

    validationFields(email, password);
  }, [email, password, validEmail, validPassword])

  return (
    <Stack minW='360px' w='100%' h='100%' justifyContent="center" flex='1'
      alignItems="center" display='flex'>
      <Flex p='8' align='center' justify='center'>
        <Stack spacing='4' w='full' maxW='md'>
          <Heading fontSize='2xl'>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={
                ({ target }) => setEmail(target.value)
              }
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={
                ({ target }) => setPassword(target.value)
              }
            />
          </FormControl>
          {/* Alert forms error */}
          { !validForms && 
            <Stack spacing="6">
              <Box display="flex" alignItems="center">
                <Text fontSize='md' color="red">
                  { `Incorrect email or password!` }
                </Text>
              </Box>
            </Stack>
          }
          {/* Buttons Sign In/Sign Up */}
          <Stack spacing='6'>
            <Box display='flex' direction='column' alignItems='center' justify='around'>
              <Button
                w='100%' h='2.5rem' color='#f0f8ff' bg='#01a101'
                variant='solid'
                onClick={() => navigate("/")}
                disabled={!validForms}
              >
                Sign in
              </Button>
              <Button
                ml='2' w='100%' h='2.5rem' color='#f0f8ff' bg='#01a101'
                variant='solid'
                onClick={() => navigate("/register")}
              >
                Sign Up
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
