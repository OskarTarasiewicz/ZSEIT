// @ts-nocheck

import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    ModalBody,
    ModalCloseButton,
    PinInput,
    PinInputField,
    useColorModeValue,
    useDisclosure,
    HStack,
    ButtonGroup,
    Input
} from '@chakra-ui/react';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function SocialProfileSimple() {
    const [option, setOption] = useState();
    const [amount, setAmount] = useState(0);

    const [pin1, setPin1] = useState();
    const [pin2, setPin2] = useState();
    const [pin3, setPin3] = useState();
    const [pin4, setPin4] = useState();

    const router = useRouter();
    const [user, setUser] = useState(
        {
            login: '',
            haslo: '',
            imie: '',
            nazwisko: '',
            tag: '@brak'
        }
    );
    const [balance, setBalance] = useState();

    useEffect(() => {
        axios.get('http://localhost:3001/api/data', { withCredentials: true })
            .then(async function (response) {
                if (response.status === 200) {
                    if (!response.data.msg.user.imie) {
                        return router.push({
                            pathname: '/'
                        });
                    }

                    axios.get('http://localhost:3001/api/balance', { withCredentials: true, params: { login: response.data.msg.user.login } })
                        .then(async function (response) {
                            if (response.status === 200) {
                                return await setBalance(response.data.msg)
                            }
                        }).catch((e) => {
                            setBalance(0);
                        })

                    return await setUser(response.data.msg.user)
                } else {
                    return router.push({
                        pathname: '/'
                    });
                }
            }).catch((e) => {
                return router.push({
                    pathname: '/'
                })
            })
    }, [])


    const operation = () => {
        if (pin1 + pin2 + pin3 + pin4 !== '1111') {
            return alert('Błędny PIN!!!');
        }
        console.log(option);
        if (option === 0) {
            axios.get('http://localhost:3001/api/withdraw', { withCredentials: true, params: { login: user.login, amount: amount } })
                .then(function (response) {
                    if (response.status === 200) {
                        return alert(`Wypłacono ${amount}zł z konta`);
                    }
                }).catch((e) => {
                    return alert(e);
                });
        }

        if (option === 1) {
            axios.get('http://localhost:3001/api/deposit', { withCredentials: true, params: { login: user.login, amount: amount } })
                .then(function (response) {
                    if (response.status === 200) {
                        return alert(`Wpłacono ${amount}zł na konto`);
                    }
                }).catch((e) => {
                    return alert(e);
                })
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Center py={6}>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent bg={'orange.500'}>
                    <ModalHeader color={'white'}>Wymanage potwierdzenie</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody justifyContent={'center'} textAlign={'center'}>
                        <Tabs variant='enclosed'>
                            <TabList>
                                <Tab onClick={() => { return setOption(0) }} color={'white'} fontWeight={'black'}>Wypłać</Tab>
                                <Tab onClick={() => { return setOption(1) }} color={'white'} fontWeight={'black'}>Wpłać</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Heading padding={'6'} color={'white'} fontWeight={'black'}>Wypłacanie</Heading>
                                    <HStack width={'10vw'} marginX={'auto'} textAlign={'center'}>
                                        <PinInput size={'lg'}>
                                            <PinInputField onChange={(e) => {return setPin1(e.target.value)}} color={'white'} fontWeight={'black'} />
                                            <PinInputField onChange={(e) => {return setPin2(e.target.value)}} color={'white'} fontWeight={'black'} />
                                            <PinInputField onChange={(e) => {return setPin3(e.target.value)}} color={'white'} fontWeight={'black'} />
                                            <PinInputField onChange={(e) => {return setPin4(e.target.value)}} color={'white'} fontWeight={'black'} />
                                        </PinInput>
                                    </HStack><br />
                                    <Input onChange={(e) => { return setAmount(e.target.value); }} width={'5vw'} type={'number'} placeholder={'Kwota'} min={1} max={500} /> <Text as={'span'} color={'white'} fontWeight={'black'}>zł</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Heading padding={'6'} color={'white'} fontWeight={'black'}>Wpłacanie</Heading>
                                    <HStack width={'10vw'} marginX={'auto'} textAlign={'center'}>
                                        <PinInput size={'lg'}>
                                            <PinInputField color={'white'} fontWeight={'black'} />
                                            <PinInputField color={'white'} fontWeight={'black'} />
                                            <PinInputField color={'white'} fontWeight={'black'} />
                                            <PinInputField color={'white'} fontWeight={'black'} />
                                        </PinInput>
                                    </HStack><br />
                                    <Input width={'5vw'} type={'number'} placeholder={'Kwota'} min={1} max={500} /> <Text as={'span'} color={'white'} fontWeight={'black'}>zł</Text>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>
                    <ModalFooter>
                        <ButtonGroup>
                            <Button onClick={onClose}>Anuluj</Button>
                            <Button onClick={() => { operation(); }}>Dalej</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>

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
                    <Suspense fallback={'Lodaing...'}>
                        {user.imie} {user.nazwisko}
                    </Suspense>
                </Heading>
                <Text fontWeight={600} color={'gray.200'} mb={4}>
                    <Suspense fallback={'Lodaing...'}>
                        @{user.tag}
                    </Suspense>
                </Text>
                <Text
                    textAlign={'center'}
                    fontSize={'2xl'}
                    fontWeight={'black'}
                    color={useColorModeValue('white', 'gray.400')}
                    px={3}>
                    <Suspense fallback={'Loading...'}>
                        {balance}zł
                    </Suspense>
                </Text>
                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        onClick={onOpen}
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        Wpłać
                    </Button>
                    <Button
                        onClick={onOpen}
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