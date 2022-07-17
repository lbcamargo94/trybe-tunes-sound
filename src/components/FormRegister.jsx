import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// chakra-ui imports
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function FormRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  return (
    <Flex p='8' minW='360px' w='100%' h='100%' justifyContent="center"
    lex='1' alignItems="center" display='flex' >
      <Stack spacing='4' w='full' maxW='md' >
        <Stack align='center'>
          <Heading fontSize='2xl' textAlign='center'>
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
                    onChange={({ target }) => setName(target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    onChange={({ target }) => setLastName(target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={({ target }) => setEmail(target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  onChange={({ target }) => setPassword(target.value)}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                bg="#ffffff80"
                color="#01a101"
                loadingText="Submitting"
                size="lg"
                _hover={{
                  bg: "#01a101",
                  color: "#f0f8ff"
                }}
                onClick={() => getNewUser()}  
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? 
                <Link
                color={'#01a101'}
                href='/login'>
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
