import { Button, Flex, Text, Title, clsx } from "@mantine/core";
import React, { ReactNode } from "react";
import { Cormorant_Garamond } from "@next/font/google";
import Link from "next/link";

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["cyrillic"],
  weight: "300",
});
interface IAuth {
  children: ReactNode;
  title: string;
  BtnText: string;
  preHref: string;
  href: string;
  hrefAction: string
}

export function AuthLayout({ children, title, BtnText, preHref, href, hrefAction }: IAuth) {
  return (
    <Flex
      w="100%"
      h="100vh"
      bg="#f6f6f6"
      align="center"
      justify="center"
      className="relative"
      p={20}
    >
      <Title
        className={clsx(
          "absolute top-10 left-10 cmd:left-4",
          cormorantGaramond.className
        )}
      >
        <span className="text-blue-400">Swift</span>Chat
      </Title>
      <Flex
        maw={500}
        w={500}
        className="auth-shadows border border-blue-300 cmd:p-1 p-4"
      >
        <form action="" className="w-full">
        <Flex
          w="100%"
          h="max-content"
          justify="center"
          direction="column"
          align="center"
          gap={28}
          p="clamp(8px,1vw,16px)"
        >
          <Title className="text-blue-400 cmd:text-[24px]">{title}</Title>
          <Flex direction="column" gap={20} w="100%">
            {children}
            <Text align='end'size={12} mt='-16px'>{preHref} <Link href={href} className="text-blue-300">{hrefAction}</Link></Text>
            <Flex w="100%" justify="center">
              <Button maw="max-content" className="bg-blue-400">
                {BtnText}
              </Button>
            </Flex>
          </Flex>
        </Flex>

        </form>
      </Flex>
    </Flex>
  );
}
