"use client"
import {  Button, Card, Checkbox, Flex, Image, Link, Field, Input, Stack } from "@chakra-ui/react"
import { PasswordInput } from "@/components/ui/password-input"
import BtnGoogle from "@/components/ui/btnGoogle"
import { useEffect } from "react"
import useStore from "@/components/globaState/store"

export const Login = () => {
  
  const {user} = useStore()
  useEffect(() => {
  console.log("Usuário atual:", user)
  }, [user])

  return (
  <Flex  minH="100vh" 
    align="center" 
    justify="center" 
    bg="blue.50" 
    p={4}    
    >
    
    <Card.Root display="flex" alignItems="center"  justifyContent="center" maxW="sm" boxShadow="xl">
    <Card.Header >
      <Image
    src="https://bit.ly/naruto-sage"
    boxSize="45px"
    borderRadius="full"
    fit="cover"
    alt="Naruto Uzumaki"
  />  
      <Card.Description>
        Aurora
      </Card.Description>
    </Card.Header>
    <Card.Body>
      <Stack gap="4" w="full">
        <Field.Root>
          <Field.Label>Email/Username</Field.Label>
          <Input />
        </Field.Root>
        <PasswordInput defaultValue="Password"/>
      </Stack>
    </Card.Body>
    <Checkbox.Root>
      <Checkbox.HiddenInput  />
      
      <Checkbox.Control />
      <Checkbox.Label gap="2" >
        Remember-me{" "}
        <Link margin="2" colorPalette="teal" href="https://google.com">
          Forget password?
        </Link>
      </Checkbox.Label>      

    </Checkbox.Root>
    <Card.Footer borderRadius="50%" justifyContent="center">
      
      <Button variant="solid" background="blue"  >Login</Button>
      <BtnGoogle></BtnGoogle>
    </Card.Footer>
    
  </Card.Root>
  </Flex>
  
)
}
export default Login