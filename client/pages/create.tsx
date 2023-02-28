import React, {useState} from "react";
import { Box, Heading, Input, Textarea, Button } from '@chakra-ui/react';
import { NextPage } from "next";
import axios from 'axios';

const Create: NextPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const submit = () => {
        axios.get('http://localhost:3001/api/create', {
            withCredentials: true,
            params: {title: title, content: content}
        }).then(function(response) {
            if (response.status === 200) {
                alert('Utworzono')
            }
        }).catch(err => {
            alert(err);
        })
    }

  return (
    <Box bg={'gray.800'} width={'100vw'} height={'98vh'}>
      <Heading padding={'12'} textAlign={'center'} color={'white'}>(CREATE) - Tworzenie plików</Heading>
      <Box padding={'32'} display={'flex'} flexDir={'column'} justifyContent={'center'}>
        <Input onChange={(e) => {return setTitle(e.target.value);}} placeholder={'Tytuł'} variant={'filled'} />
        <Textarea onChange={(e) => {return setContent(e.target.value);}} marginTop={'24'} placeholder={'Treść'} variant={'filled'} />
        <Button onClick={() => {return submit();}} marginTop={'10'}>
          Stwórz
        </Button>
      </Box>
    </Box>
  );
};

export default Create;