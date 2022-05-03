import { Button, Container, Flex, Heading, Input, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react"

const IndexPage = () => {

  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue('gray.100', 'gray.700')

  return (

    <Container maxWidth='container.xl' padding={0} border='1px solid black'>
      <Flex h='100vh' py={20} border='1px solid red'>
        <VStack
          w='full'
          h='full'
          p={10}
          spacing={10}
          alignItems='flex-start'
          bg='red.100'
        >
          </VStack>
          <VStack
            w='full'
            h='full'
            p={10}
            spacing={10}
            alignItems='flex-start'
            bg='gray.200'
          ></VStack>


      </Flex>
    </Container>
    // LOGIN PAGE
    // <Flex height='100vh' alignItems='center' justifyContent='center'>
    //   <Flex direction='column' background={ formBackground } padding={12} rounded={6}>
    //     <Heading mb={6}> Log in</Heading>
    //     <Input placeholder="cristian@gmail.com" variant='filled' mb={3} type='email' /> 
    //     <Input placeholder="********" variant='filled' mb={6} type='password'/> 
    //     <Button mb={6} colorScheme="teal" >Log In</Button>
    //     <Button onClick={ toggleColorMode}>Toggle Color Mode</Button>
    //   </Flex>
    // </Flex>
  )
}

export default IndexPage