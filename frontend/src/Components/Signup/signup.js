import React from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Box,
  VStack,
  InputGroup,
  InputLeftElement,
  useBreakpointValue
} from '@chakra-ui/react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons from react-icons

export const SignUp = () => {
  const padding = useBreakpointValue({ base: 4, md: 6 });
  const maxW = useBreakpointValue({ base: '90%', sm: 'md' });

  return (
    <Box
      maxW={maxW}
      mx="auto"
      p={padding}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      mt={12}
    >
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <h1 style={{ fontSize: '2xl', fontWeight: 'bold' }}>Sign Up</h1>
        </Box>

        <FormControl>
          <FormLabel htmlFor='username'>Username</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <FaUser color="teal" />
            </InputLeftElement>
            <Input
              id='username'
              type='text'
              placeholder='Enter your username'
              focusBorderColor="teal.500"
              variant="outline"
            />
          </InputGroup>
          <FormHelperText>Choose a unique username.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <FaEnvelope color="teal" />
            </InputLeftElement>
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              focusBorderColor="teal.500"
              variant="outline"
            />
          </InputGroup>
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <InputGroup>
            <InputLeftElement>
              <FaLock color="teal" />
            </InputLeftElement>
            <Input
              id='password'
              type='password'
              placeholder='Enter your password'
              focusBorderColor="teal.500"
              variant="outline"
            />
          </InputGroup>
          <FormHelperText>Keep your password secure.</FormHelperText>
        </FormControl>

        <Button
          colorScheme='teal'
          size='lg'
          type='submit'
          mt={4}
          _hover={{ bg: 'teal.600' }}
        >
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
};
