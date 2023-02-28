import React, {Suspense, useEffect, useState} from "react";
import {Box, Heading, Select, Textarea} from '@chakra-ui/react';
import {NextPage} from "next";
import axios from "axios";

const Home: NextPage = () => {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState();

    useEffect(() => {
        axios.get('http://localhost:3001/api/all', {
            withCredentials: true
        }).then(function (response) {
            if (response.status === 200) {
                response.data.msg.forEach((n: any) => {
                    // @ts-ignore
                    return data.push(n);
                })
                console.log(data)
            }
        }).catch(err => {
            alert(err);
        })
    }, []);

    return (
        <Box bg={'gray.800'} width={'100vw'} height={'98vh'}>
            <Heading padding={'12'} textAlign={'center'} color={'white'}>(READ) - Podgląd plików</Heading>
            <Box padding={'32'} display={'flex'} flexDir={'column'} justifyContent={'center'}>
                <Select onChange={(e) => {return setSelected(e.target.value)}} variant={'filled'}>
                    <Suspense fallback={'Ładowanie...'}>
                        {data.map((value, i) => {
                            // @ts-ignore
                            return (<option key={i} value={value.content}>{value.title}</option>);
                        })}
                    </Suspense>
                </Select>
                <Textarea variant={'filled'} marginTop={'24'} disabled value={selected}/>
            </Box>
        </Box>
    );
};

export default Home;