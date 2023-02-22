import React from "react";
import { Box, Heading, Input, Textarea, Button } from '@chakra-ui/react';
import { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <Box bg={'gray.800'} width={'100vw'} height={'98vh'}>
      <Heading padding={'12'} textAlign={'center'} color={'white'}>(CREATE) - Tworzenie plików</Heading>
      <Box padding={'32'} display={'flex'} flexDir={'column'} justifyContent={'center'}>
        <Input placeholder={'Tytuł'} variant={'filled'} />
        <Textarea marginTop={'24'} placeholder={'Treść'} variant={'filled'} />
        <Button marginTop={'10'}>
          Stwórz
        </Button>
      </Box>
    </Box>
  );
};

export default Create;