"use client"

import { Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link"; 
import BtnLogout from "../BtnLogout/BtnLogout";
import Criar from "../criar/criar";

const Header = () => {
  return (
    <Flex gap="4" justify="space-between" padding="0">
      <Image
        src="./icon.svg"
        alignItems="center"
        width="19px"
        height="18px"
        marginTop="18px"
        marginLeft="18px"
        _hover={{
          boxShadow: "md",
          transform: "scale(1.05)",
          transition: "all 0.3s ease-in-out",
        }}
      />

      <Flex gap="4" padding="2" justify="flex-start" marginRight="25px">

        
        <Link href="/dashboard">
          <Button
            background="white"
            border="1px solid"
            color="black"
            borderRadius="9px"
            variant="outline"
            size="sm"
          >
            Home
          </Button>
        </Link>

        <BtnLogout />
      </Flex>
    </Flex>
  );
};

export default Header;
