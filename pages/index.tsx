import Image from "next/image";
import { Inter } from "next/font/google";
import { AuthLayout } from "@/components";
import { Button, Flex, PasswordInput, Text, TextInput } from "@mantine/core";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
  
      <AuthLayout title="Welcome" BtnText='Login' preHref="You don't have an account?" href="/register" hrefAction="Register">
        <TextInput label="Email" />
        <PasswordInput label="Password" />
    
      </AuthLayout>
  );
}
