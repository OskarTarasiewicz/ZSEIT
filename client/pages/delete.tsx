import React from "react";
import { Box, Heading, Select, Textarea, Button } from '@chakra-ui/react';
import { NextPage } from "next";

const Delete: NextPage = () => {
  return (
    <Box bg={'gray.800'} width={'100vw'} height={'98vh'}>
      <Heading padding={'12'} textAlign={'center'} color={'white'}>(DELETE) - Usuwanie plików</Heading>
      <Box padding={'32'} display={'flex'} flexDir={'column'} justifyContent={'center'}>
        <Select variant={'filled'}>
          <option>notatka</option>
          <option>testowa treść</option>
        </Select>
        <Textarea marginTop={'24'} variant={'filled'} disabled />
        <Button marginTop={'10'}>
          Usuń
        </Button>
      </Box>
    </Box>
  );
};

export default Delete;