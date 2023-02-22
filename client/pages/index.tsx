import React, { useEffect, useState } from "react";
import { Box, Heading, Select, Textarea } from '@chakra-ui/react';
import { NextPage } from "next";
import axios from "axios";

const Home: NextPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/api/read', {withCredentials: true})
    .then(function(response) {
      if (response.status === 200) {
        setData(response.data.msg)
        console.log(response.data.msg)
      }
    })
  });

  return (
    <Box bg={'gray.800'} width={'100vw'} height={'98vh'}>
      <Heading padding={'12'} textAlign={'center'} color={'white'}>(READ) - Podgląd plików</Heading>
      <Box padding={'32'} display={'flex'} flexDir={'column'} justifyContent={'center'}>
        <Select variant={'filled'}>
          <option>notatka</option>
          <option>testowa treść</option>
        </Select>
        <Textarea variant={'filled'} marginTop={'24'} disabled />
      </Box>
    </Box>
  );
};

export default Home;