import { Avatar, Flex, Text, TextInput } from "@mantine/core";
import React from "react";
import { BiSearch } from "react-icons/bi";

interface IUsers {
    id: string;
    user:string
}
const Users:IUsers[] = [
    {
        id: '1',
        user: 'Olatunji Temitayo'
    },
    {
        id: '2',
        user: 'Afolabi Oreoluwa'
    },
]
export function SearchInput() {
  const searchText = "fdf";
  return (
    <Flex direction="column" className="p-2 gap-2">
      <TextInput placeholder="Find a user" rightSection={<BiSearch />} />
      {searchText?.length != 0 ? (
        <Flex
          w="100%"
          h="max-content"
          direction='column'
          gap={16}
          className="p-1 gap-2 bg-[#1c1c1c] bg-opacity-30 rounded-lg items-center"
        >{
            Users.map((user) => (
          <Flex
       
          key={user?.id}
            className="gap-2 items-center hover:bg-gray-600 rounded-lg cursor-pointer p-2"
            w="100%"
          >
            <Avatar size={16} />
            <Text c='#fff' size={14}>{user?.user}</Text>
          </Flex>

            ))
        }
        </Flex>
      ) : null}
    </Flex>
  );
}
