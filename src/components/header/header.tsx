"use client"

import { Button, Flex, Image, Box, HStack } from "@chakra-ui/react";
import Link from "next/link"; 
import BtnLogout from "../BtnLogout/BtnLogout";

const Header = () => {
  return (
    <Flex 
      gap="4" 
      justify="space-between" 
      align="center"
      w="100%"
    >
      <Box>
        <Image
          src="./icon.svg"
          alt="Logo"
          width="32px"
          height="32px"
          _hover={{
            boxShadow: "md",
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer"
          }}
        />
      </Box>

      <HStack gap={3} align="center">
        <Link href="/dashboard">
          <Button
            variant="outline"
            size="sm"
            colorScheme="gray"
            borderRadius="md"
            _hover={{
              bg: "gray.50",
              transform: "translateY(-1px)",
              boxShadow: "sm"
            }}
          >
            Home
          </Button>
        </Link>

        <BtnLogout />
      </HStack>
    </Flex>
  );
};

export default Header;
