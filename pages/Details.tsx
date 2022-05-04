import { Heading, VStack, Text, SimpleGrid, GridItem, FormLabel, Input, FormControl, Select, Checkbox, Button, useBreakpointValue } from "@chakra-ui/react"

const Details = () => {

    const colspan = useBreakpointValue({ base: 2, md: 1 })
    return (
        <VStack
            w='full'
            h='full'
            p={10}
            spacing={10}
            alignItems='flex-start'
        >
            <VStack spacing={3} w='full' alignItems='flex-start'>
                <Heading size='2xl'>Your details</Heading>
                <Text> If you already have an account, click here to log in</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={4} w='full'>
                <GridItem colSpan={colspan}>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="John" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colspan}>
                    <FormControl >
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="Doe" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Adress</FormLabel>
                        <Input placeholder="Av. Saint 2258" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colspan}>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input placeholder="Buenos Aires" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colspan}>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select>
                            <option value='usa'>United States of America</option>
                            <option value='ger'>Germany</option>
                            <option value='spn'>Spain</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem>
                    <Checkbox defaultChecked >Ship to billing address</Checkbox>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button size='lg' w='full'>
                        Place Order
                    </Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    )
}

export default Details