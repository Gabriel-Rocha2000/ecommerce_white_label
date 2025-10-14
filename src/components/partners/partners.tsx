import { Box, Flex, Image, Text, } from "@chakra-ui/react"


const Partners = () => {
  return (

    <Box backgroundColor="B8B8B9" maxW="85%" mx="auto" mt="8" textAlign="center">
        <Flex justify="center" gap="4" mt="8" mb="4">
            <Text fontWeight="700">TRUSTED PARTNERS</Text>
        </Flex>
    <Flex justify="space-between" gap="2" margin="10px">
        <Flex flexDirection={"column"}>
            <Text fontWeight="600">STAY INFORMED</Text>
            <p >Get exousive deals and updates</p>
         </Flex>
      
      <Flex>
            <Image src="/icontch.svg" alt="Logo 1" boxSize="40px" objectFit="contain" gap="23"/>
            <Text fontWeight="light"color="B5C6D1">TECHCO</Text>
            
         </Flex>
      
      <Text>ELECTRO</Text>
        <Text>GEARUP</Text>
        <Text>NEXUS</Text>
    </Flex>

    </Box>
    
  )
}
export default Partners