import { AuthLayout } from '@/components';
import { Box, FileInput, PasswordInput, TextInput } from '@mantine/core';
import React, { useState } from 'react';

export default function Register() {
  const [file, setFile] = useState<File | null>(null);

  function handleChange(selectedFile: File | null) {
    setFile(selectedFile);
  }

  return (
    <AuthLayout title={'Create an Account'} BtnText={'Sign Up'} preHref={'Have an account?'} href={'/'} hrefAction={'Login'}>
        <Box maw={300} mah={300} className='rounded-full'>
      
      <FileInput  id="avatar" name="avatar" label="Upload Avatar" onChange={handleChange} />
      {file && <img src={URL.createObjectURL(file)} alt="Uploaded avatar" />}

        </Box>
      <TextInput label="Username" />
      <TextInput label="Email" />
      <PasswordInput label="Password" />
    </AuthLayout>
  );
}
