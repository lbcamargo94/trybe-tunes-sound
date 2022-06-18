import React from 'react';
import { useNavigate } from 'react-router-dom';
// import chakra ui
import {
  Box,
  Button,
  Container,
  Image,
  Text,
} from '@chakra-ui/react';
// import image
import HeadPhonePink from '../assets/images/head-phone-01.jpg'
import HeadPhoneBlue from '../assets/images/head-phone-02.jpg'
import HeadPhoneYellow from '../assets/images/head-phone-03.jpg'
import HeadPhoneGreen from '../assets/images/head-phone-04.jpg'
// import components
import Logo from '../components/Logo';

export default function Home() {
  let navigate = useNavigate();

  return (
    <Container display='flex' flexDir='column' alignItems='center' justifyContent='center'
      w='100%' h='100%' p='1rem'>
      <Logo />
      <Box display='flex' alignItems='center' justifyContent='space-between'
        borderRadius='1rem' m='1rem'>
        <Image src={HeadPhonePink} alt='HeadPhonePink' maxW='25%'/>
        <Image src={HeadPhoneYellow} alt='HeadPhonePink' maxW='25%'/>
        <Image src={HeadPhoneBlue} alt='HeadPhonePink' maxW='25%'/>
        <Image src={HeadPhoneGreen} alt='HeadPhonePink' maxW='25%'/>
      </Box>
      <Box display='flex' alignItems='center' justifyContent='space-between'
        maxW='100%' borderRadius='1rem' m='1rem' mt='3rem' p='2rem'>
        <Text className='txtIntroduction' color='#f0f8ff'>
          TrybeTunes, an application capable of playing songs from the most varied bands and artists, creating a list of favorite songs and editing the profile of the user logged in.
        </Text>
      </Box>
      <Box display='flex' alignItems='center' justfy='center' m='0 auto'>
        <Button
          className='txtIntroduction'
          m='1rem' w='7.5rem' h='2.5rem' color='#f0f8ff' bg='#01a101'
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button 
          className='txtIntroduction'
          m='1rem' w='7.5rem' h='2.5rem' color='#f0f8ff' bg='#01a101'
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
}
