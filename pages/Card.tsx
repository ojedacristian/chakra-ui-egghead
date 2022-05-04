import { Heading, Text, VStack, SimpleGrid, GridItem, Box, Divider, AspectRatio, Button, useColorMode, useColorModeValue, HStack, Flex } from '@chakra-ui/react';

const Card = () => {

    const { toggleColorMode } = useColorMode()
    const background = useColorModeValue('gray.100', 'gray.700')

    return (
        <VStack
            w='full'
            h='full'
            p={10}
            spacing={10}
            alignItems='flex-start'
            bg={background}
        >
            <VStack spacing={3} w='full' alignItems='flex-start' >
                <Heading size='2xl'>Your cart</Heading>
                <Text> If price is too hard on your eyes,             <Button variant='link' onClick={toggleColorMode}>try changing the theme.
                </Button>
 </Text>
            </VStack>
            <HStack justifyContent='space-between' w='full'>
                <Flex justifyContent='center' alignItems='center' >
                    <AspectRatio ratio={1} w={24}>
                        <img src='http://via.placeholder.com/96' />
                    </AspectRatio>
                    <Box p={6}>
                        <Text fontWeight='bold'>Penny board</Text>
                        <Text>PNYCOMP27541</Text>
                    </Box>
                </Flex>
                <Text fontWeight='bold'>$119.00</Text>
            </HStack>


            <HStack justifyContent='space-between' w='full'>
                <Text>Subtotal</Text>
                <Text fontWeight='bold'>$119.00</Text>
            </HStack>
            <HStack justifyContent='space-between' w='full'>
                <Text>Shipping</Text>
                <Text fontWeight='bold'>$19.99</Text>
            </HStack>
            <HStack justifyContent='space-between' w='full'>
                <Text>Taxes (estimated)</Text>
                <Text fontWeight='bold'>$23.80</Text>
            </HStack>
            <Divider borderColor='gray.300'/>
            <HStack justifyContent='space-between' w='full'>
                <Text>Total</Text>
                <Heading>$162.79</Heading>
            </HStack>
        </VStack>
    )
}

export default Card;