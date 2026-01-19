"use client"
import { useState } from "react"
import { Flex,  Box, Text, Button, HStack, Stack, VStack, Heading } from "@chakra-ui/react"
import List from "@/components/List"
import Grafico from "@/components/grafico/grafico"
import { ProductsProvider } from "@/context/ProductsContext"
import {Tabs } from "@chakra-ui/react"
import { ProductForm } from "@/components/criar/ProductForm"


const DashProdutos = () => {
  const [activeTab, setActiveTab] = useState("products")
  const [editingProduct, setEditingProduct] = useState(null)

  const handleEditProduct = (product) => {
    setEditingProduct(product)
    setActiveTab("members")
  }

  const handleFormSave = () => {
    setActiveTab("products")
    setEditingProduct(null)
  }

  const handleFormCancel = () => {
    setActiveTab("products")
    setEditingProduct(null)
  }
  return (
    <ProductsProvider>
      <Box>
        <Flex justify="start" align="center" mb={6}>
          <Tabs.Root value={activeTab} onValueChange={(e) => setActiveTab(e.value)}>
                <Tabs.List
                  display="flex"
                  gap="2"
                  mb="6"
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
                  <Box display="flex" alignItems="center" justifyContent="space-between" mb={6}>
                    <Text
                      as="h2"
                      fontSize="xl"
                      color="gray.800"
                      fontWeight="semibold"
                    >
                      Produtos Cadastrados
                    </Text>
                  </Box>

                  <Box
                    maxH="500px"
                    overflowY="auto"
                    pr={2}
                    borderRadius="md"
                    sx={{
                      "&::-webkit-scrollbar": { width: "8px" },
                      "&::-webkit-scrollbar-track": { background: "gray.100", borderRadius: "4px" },
                      "&::-webkit-scrollbar-thumb": { 
                        background: "gray.400", 
                        borderRadius: "4px",
                        "&:hover": { background: "gray.500" }
                      }
                    }}
                  >
                    <List onEditProduct={handleEditProduct} />
                  </Box>
                </Tabs.Content>

                <Tabs.Content value="members">
                  <Box>
                    <Text 
                      fontSize="xl" 
                      fontWeight="semibold" 
                      mb={6}
                      color="gray.800"
                    >
                      {editingProduct ? "Editar Produto" : "Cadastro de Produtos"}
                    </Text>
                    <Box
                      bg="gray.50"
                      borderRadius="lg"
                      p={6}
                      border="1px solid"
                      borderColor="gray.200"
                    >
                      <ProductForm 
                        onSave={handleFormSave} 
                        onCancel={handleFormCancel}
                        editingProduct={editingProduct}
                      />
                    </Box>
                  </Box>
                </Tabs.Content>
              </Tabs.Root> 
        </Flex>
      </Box>
    </ProductsProvider>
  )

};

export default DashProdutos;