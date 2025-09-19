import {Button, Flex,} from "@chakra-ui/react"


const Header = () => {
  return (
    <Flex gap="4" justify="space-between" padding ="2" >
      <div>Icone</div>
      
      <Flex  gap="4" padding ="2" justify="flex-start" marginRight="25px" >
        <Button background="white" border="1px solid" color="black" borderRadius="9px" >Sign up</Button>
       <Button background="black" borderRadius="9px" >Sign up</Button>
       </Flex>
      
    </Flex>
  )}

export default Header