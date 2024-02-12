import { Chat, Sidebar } from '@/components'
import { Button, Flex } from '@mantine/core'
import React from 'react'

export default function Main() {
  return (
    <Flex w='100%' h='100vh' align='center' justify='center'   bg="#f6f6f6" className='border relative'>
         <Button className='bg-blue-200 hover:bg-blue-300 cursor-pointer  text-[#1c1c1c] absolute right-2 top-2'>LOG OUT</Button>
        <Flex w='70%' mih={500} className='auth-shadows rounded-2xl overflow-hidden'>
        <Sidebar />
       <Chat />
        </Flex>
    </Flex>
  )
}
