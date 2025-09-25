import {Button, Flex,Image} from "@chakra-ui/react"


const Header = () => {
  return (
    <Flex gap="4" justify="space-between" padding ="2" >
      <Image src="./icon.svg" alignItems="center" width="19px" height="18px" marginTop="18px" marginLeft="18px"  />
      
      <Flex  gap="4" padding ="2" justify="flex-start" marginRight="25px" >
        <Button background="white" border="1px solid" color="black" borderRadius="9px" >Sign up</Button>
        <Button background="white" border="1px solid" color="black" borderRadius="9px" >Sign up</Button>
       <Button background="black" borderRadius="9px" marginLeft="30px">Sign up</Button>
       </Flex>
      
    </Flex>
  )}

export default Header