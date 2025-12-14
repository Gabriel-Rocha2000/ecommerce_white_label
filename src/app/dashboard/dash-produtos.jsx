"use client"
import { useState } from "react"
import { Flex,  Box, Text, Button, HStack, Stack, VStack, Heading } from "@chakra-ui/react"
import List from "@/components/List/List"
import Grafico from "@/components/grafico/grafico"
import Header from "@/components/header/header"
import { ProductsProvider } from "@/context/ProductsContext"
import {Tabs } from "@chakra-ui/react"
import { ProductForm } from "@/components/criar/ProductForm"


const DashProdutos = () => {
    const [activeTab, setActiveTab] = useState("products")

  const handleCreateClick = () => {
    setActiveTab("members")
  }

  const handleFormSave = () => {
    setActiveTab("products")
  }

  const handleFormCancel = () => {
    setActiveTab("products")
  }
  return (
    <ProductsProvider>
      <>
        <Header box-shadow="5px 5px 10px 2px rgba(0, 0, 0, 0.37)"/>
          
        <Flex justify="center" align="center" mt={6} mb={6}>
         <Tabs.Root value={activeTab} onValueChange={(e) => setActiveTab(e.value)}>
                <Tabs.List
                  display="flex"
                  gap="2"
                  mb="4"
                  borderBottom="none"
                >
                  <Tabs.Trigger 
                    value="products"
                    css={{
                      "&[data-state='active']": {
                        borderBottom: "none",
                        "& > div": {
                          bg: "gray.100",
                          borderColor: "gray.300",
                        }
                      },
                      "&[data-state='inactive']": {
                        borderBottom: "none",
                      }
                    }}
                  >
                    <Box
                      bg="gray.100"
                      border="1px solid"
                      borderColor="gray.300"
                      borderRadius="md"
                      px="4"
                      py="2"
                    >
                      <Text
                        fontSize="md"
                        color="gray.700"
                        fontWeight="medium"
                      >
                        Produtos Cadastrados
                      </Text>
                    </Box>
                  </Tabs.Trigger>
                  <Tabs.Trigger 
                    value="members"
                    css={{
                      "&[data-state='active']": {
                        borderBottom: "none",
                        "& > div": {
                          bg: "gray.100",
                          borderColor: "gray.300",
                        }
                      },
                      "&[data-state='inactive']": {
                        borderBottom: "none",
                      }
                    }}
                  >
                    <Box
                      bg="gray.100"
                      border="1px solid"
                      borderColor="gray.300"
                      borderRadius="md"
                      px="4"
                      py="2"
                    >
                      <Text
                        fontSize="md"
                        color="gray.700"
                        fontWeight="medium"
                      >
                        Cadastro de produtos
                      </Text>
                    </Box>
                  </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="products">
                  <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
                    <Text
                      as="h2"
                      fontSize="2xl"
                      color="gray.700"
                      fontWeight="semibold"
                    >
                      Produtos Cadastrados
                    </Text>
                    <Button variant="outline" size="sm" onClick={handleCreateClick}>
                      Cadastro de produtos
                    </Button>
                  </Box>

                  <Box
                    maxH="300px"
                    overflowY="auto"
                    pr={2}
                    sx={{
                      "&::-webkit-scrollbar": { width: "6px" },
                      "&::-webkit-scrollbar-track": { background: "#f1f1f1" },
                      "&::-webkit-scrollbar-thumb": { background: "#c1c1c1", borderRadius: "4px" }
                    }}
                  >
                    <List />
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="members">
                  <Box>
                    <Text fontSize="xl" fontWeight="semibold" mb={4}>
                      Cadastro de Produtos
                    </Text>
                    <ProductForm onSave={handleFormSave} onCancel={handleFormCancel} />
                  </Box>
                </Tabs.Content>
              </Tabs.Root> 
        
          

         
        </Flex>
      </>
    </ProductsProvider>
  )

};

export default DashProdutos;