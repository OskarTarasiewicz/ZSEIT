import React from 'react';
import {
    Box,
    Flex,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    return (
        <Box bg={useColorModeValue('gray.900', 'gray.800')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            color={'white'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                            <HamburgerIcon/>
                        </MenuButton>
                        <MenuList bg={'gray.900'}>
                            <MenuItem onClick={() => router.push({pathname: '/create'})} color={'white'} bg={'gray.900'}>Create</MenuItem>
                            <MenuItem onClick={() => router.push({pathname: '/'})} color={'white'}  bg={'gray.900'}>Read</MenuItem>
                            <MenuDivider />
                            <MenuItem onClick={() => router.push({pathname: '/update'})} color={'white'}  bg={'gray.900'}>Update</MenuItem>
                            <MenuItem onClick={() => router.push({pathname: '/delete'})} color={'white'}  bg={'gray.900'}>Delete</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Box>
    );
}