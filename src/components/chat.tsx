import { Avatar, Box, Flex, Text, TextInput } from "@mantine/core";
import React from "react";
import { BsArrowBarRight, BsArrowRight, BsCameraVideo, BsTelephone } from "react-icons/bs";
import { Messages } from ".";
import { TbSquareRoundedArrowRight } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

export function Chat() {
  return (
    <Flex
      className="flex-1 bg-blue-100 !min-w-[400px] overflow-auto"
      direction="column"
    >
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        h="max-content"
        px={8}
        py={4}
        className="bg-blue-300 "
      >
        <Text>Afolabi Oreoluwa</Text>
        <Flex gap={20} align="center">
          <BsTelephone className="cursor-pointer" color="#1c1c1c" />
          <BsCameraVideo className="cursor-pointer" color="#1c1c1c" />
          <Avatar size={24} />
        </Flex>
      </Flex>
      <Flex direction="column" className="flex-1 overflow-auto" px={8} py={4}>
        <Messages />
      </Flex>

      <TextInput className="w-full " classNames={{input: 'h-[50px] px-4 '}} rightSection={<BsArrowRight className="cursor-pointer" size={24}/>}/>
    </Flex>
  );
}
