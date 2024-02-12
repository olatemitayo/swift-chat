import { Avatar, Flex, Text } from "@mantine/core";
import React from "react";

interface IUsers {
  id: string;
  user: string;
}
const Users: IUsers[] = [
  {
    id: "1",
    user: "Olatunji Temitayo",
  },
  {
    id: "2",
    user: "Afolabi Oreoluwa",
  },
];
export function ChatsList() {
  return (
    <Flex
      w="100%"
      h="max-content"
      direction="column"
      gap={16}
      className="p-1 gap-2  items-center"
    >
      {Users.map((user) => (
        <Flex
          key={user?.id}
          className="gap-3 items-center hover:bg-gray-400 hover:bg-opacity-20 rounded-lg cursor-pointer p-2"
          w="100%"
        >
          <Avatar size={32} />
          <Flex direction="column">
            <Text c="#1c1c1c">{user?.user}</Text>
            <Text size={12}>Hello</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
