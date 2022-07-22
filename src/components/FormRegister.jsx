import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useUpdateContext } from '../utils/provider';

// chakra-ui imports
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

// Import forms validation
import {
  emailValidation,
  passwordValidation,
  nameValidation,
} from '../helpers/validationRegisterForms';
  
export default function FormRegister() {
  // States
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validForms, setValidForms] = useState(false);

  // React Touter Dom useNavigate
  let navigate = useNavigate();

  // Save newUser in Context
  const { data, setData } = useUpdateContext();

  const addNewUser = (
    firstName, lastName, email, password
    ) => {
  let newUser = { firstName, lastName, email, password };
    setData([...data, newUser]);
    navigate('/login');
  };

  useEffect(() => {
    function validationFields(firstName, password, email) {
      let validName = nameValidation(firstName);
      let validPassword = passwordValidation(password);
      let validEmail = emailValidation(email);
      let arrValidation = [validName, validPassword, validEmail]
      setValidForms(!arrValidation.every(elemnt => elemnt == true))
    }
    validationFields(firstName, password, email)
  }, [firstName, password, email])

  return (
    <Flex p="8" minW="360px" w="100%" h="100%" justifyContent="center"
    lex="1" alignItems="center" display="flex" >
      <Stack spacing="4" w="full" maxW="md">
        <Stack align="center">
          <Heading fontSize="2xl" textAlign="center">
            Sign up
          </Heading>

        </Stack>
        <Box >
          <Stack spacing={4} >
            <HStack>
              <Box >
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    onChange={
                      ({target}) => setFirstName(target.value)
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    defaultValue={ '' }
                    onChange={
                      ({target}) => setLastName(target.value)
                    }
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={
                  ({target}) => setEmail(target.value)
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  onChange={({target}) => setPassword(target.value)}
                />
                <Button
                  variant={'ghost'}
                  onClick={() => setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                _hover={{bg: "#f0f8ff", color: "#01a101"}}
                bg="#01a101"
                color="#f0f8ff"
                loadingText="Submitting"
                disabled={ validForms }
                onClick={() => addNewUser(firstName, lastName, email, password)}
                type="submit"
                size="lg"
              >
                Register
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? 
                <Link
                  color={'#01a101'}
                  onClick={() => navigate('/login')}
                >
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
