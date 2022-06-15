import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  Image,
  Center,
} from '@chakra-ui/react';
import ImgTunes from '../assets/images/pngwing.com.png';

export default function FormLogin() {
  let navigate = useNavigate();

  return (
    <Stack minH={'100vh'} justify="center" flex={ 1 } align="center">
      <Center boxSize={'400px'} m={'0 auto'}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={ ImgTunes }
          w={'100%'} h={'100%'}
        />
      </Center>
      <Flex p={8} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button
              colorScheme={'blue'}
              variant={'solid'}
              onClick={() => navigate("/register")}
              disabled={''}
            >
              Sign in
            </Button>
            <Button
              colorScheme={'green'}
              variant={'solid'}
              onClick={() => navigate("/register")}
              disabled={''}
            >
              Register
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
