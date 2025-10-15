"use client"
import {  Button, Card, Checkbox, Flex, Image, Link, Field, Input, Stack, useEmptyStateStyles } from "@chakra-ui/react"
import { PasswordInput } from "@/components/ui/password-input"
import BtnGoogle from "@/components/ui/btnGoogle"
import { useEffect, useState, } from "react"
import useStore from "@/components/globaState/store"
import { useRouter } from "next/navigation";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

export const Login = () => {
  
  const { user} = useStore();
  const getUserData = useStore(state => state.getUserData)
  const router = useRouter();
  const db = getFirestore();

  useEffect(() => {
    console.log("user efetc passei", user);
  }, [user]);

  useEffect(() => {
    if (user?.uid) {
      console.log("CHAMOU CREATE USER", user)
      // Adiciona um pequeno delay para garantir que o Firestore esteja conectado
      setTimeout(() => {
        createUser();
      }, 1000);
    }
  }, [user]);

const createUser = async () => {
  try {
    // Verifica se o Firestore está conectado
    if (!db) {
      console.error("Firestore não está inicializado");
      return;
    }
    
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      await getUserData();
      console.log("Usuário já existe, dados carregados.");
      router.push('/');
      return;
    }

    
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      
      createdAt: new Date(),
      updatedAt: new Date(),
    
      produtos: [],
    });

    console.log("Usuário criado com sucesso no Firestore");
    await getUserData();
    router.push('/');
  } catch (error) {
    console.error("Erro ao criar/atualizar usuário no Firestore:", error);
  }
};
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
      
      
      <BtnGoogle></BtnGoogle>
    </Card.Footer>
    
  </Card.Root>
  </Flex>
  
)
}
export default Login