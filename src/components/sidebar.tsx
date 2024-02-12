import { Avatar, Button, Flex, Text } from "@mantine/core";
import React from "react";
import { ChatsList, SearchInput } from ".";

export function Sidebar() {
  return (
    <Flex
      className="bg-blue-200  border-gray-600 border-r-2 relative"
      miw={300} direction='column'
    >
      <Flex
        w="100%"
        h="max-content"
        justify="space-between"
        align="center"
        className="bg-blue-300 px-2 py-1"
      >
        <Text>Temms</Text>
        <Avatar size={24} />
      </Flex>
      <SearchInput />
      <ChatsList />
    </Flex>
  );
}
