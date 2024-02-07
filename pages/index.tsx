import Image from "next/image";
import { Inter } from "next/font/google";
import { AuthLayout } from "@/components";
import { Button, Flex, PasswordInput, Text, TextInput } from "@mantine/core";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
  
      <AuthLayout title={"Welcome"} BtnText='Login'>
        <TextInput label="Email" />
        <PasswordInput label="Password" />
        <Text align='end'size={12} mt='-16px'>You don't have an account? <Link href={"/register"} className="text-blue-300">Register</Link></Text>
      </AuthLayout>
  );
}
