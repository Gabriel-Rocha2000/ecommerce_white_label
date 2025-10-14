import { Button, Flex, Image } from "@chakra-ui/react";
// Ajuste o caminho conforme a localização real do BtnLogout
import BtnLogout from "../BtnLogout/BtnLogout";

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
        <Button background="white" border="1px solid" color="black" borderRadius="9px" >
          Sign up
        </Button>
        <Button background="white" border="1px solid" color="black" borderRadius="9px">
          Sign up
        </Button>
        <BtnLogout />
      </Flex>
    </Flex>
  );
};

export default Header;
