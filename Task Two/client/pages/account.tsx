import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react';

export default function SocialProfileSimple() {
    return (
        <Center py={6}>
            <Box
                marginTop={'20vh'}
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('orange.500', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    src={
                        ''
                    }
                    mb={4}
                    pos={'relative'}
                />
                <Heading fontSize={'2xl'} color={'white'} fontFamily={'body'}>
                    Oskar Tarasiewicz
                </Heading>
                <Text fontWeight={600} color={'gray.200'} mb={4}>
                    @oskarus
                </Text>
                <Text
                    textAlign={'center'}
                    fontSize={'2xl'}
                    fontWeight={'black'}
                    color={useColorModeValue('white', 'gray.400')}
                    px={3}>
                    2000zł
                </Text>
                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        Wpłać
                    </Button>
                    <Button
                        variant={'solid'}
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'orange.700'}
                        color={'white'}
                        _hover={{
                            bg: 'orange.500',
                        }}
                        _focus={{
                            bg: 'orange.500',
                        }}>
                        Wypłać
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
}