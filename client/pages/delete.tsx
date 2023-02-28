import React, {useState} from "react";
import {Box, Heading, Select, Textarea, Button, Input} from '@chakra-ui/react';
import { NextPage } from "next";
import axios from "axios";

const Delete: NextPage = () => {
    const [title, setTitle] = useState('');

    const submit = () => {
        axios.get('http://localhost:3001/api/delete', {
            withCredentials: true,
            params: {title: title}
        }).then(function (response) {
            if (response.status === 200) {
                alert('Usunięto')
            }
        }).catch(err => {
            alert(err);
        })
    }


  return (
    <Box bg={'gray.800'} width={'100vw'} height={'98vh'}>
      <Heading padding={'12'} textAlign={'center'} color={'white'}>(DELETE) - Usuwanie plików</Heading>
      <Box padding={'32'} display={'flex'} flexDir={'column'} justifyContent={'center'}>
          <Input onChange={(e) => {
              return setTitle(e.target.value);
          }} placeholder={'Tytuł notatki do usunięcia'} variant={'filled'}/>
        <Textarea marginTop={'24'} variant={'filled'} disabled />
        <Button onClick={() => {return submit();}} marginTop={'10'}>
          Usuń
        </Button>
      </Box>
    </Box>
  );
};

export default Delete;