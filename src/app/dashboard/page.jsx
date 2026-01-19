"use client"
import { useState } from "react"
import { 
  Flex, 
  Box, 
  Text, 
  Button, 
  HStack, 
  Stack, 
  VStack, 
  Heading,
  Container
} from "@chakra-ui/react"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import DashMenu from "./dash-menu"
import DashBody from "./dash-body"

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Produtos")

  return (
    <Box minH="100vh" bg="gray.50" display="flex" flexDirection="column">
      <Box 
        bg="white" 
        boxShadow="sm" 
        position="sticky" 
        top="0" 
        zIndex="1000"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Container maxW="container.xl" py={4}>
          <Header />
        </Container>
      </Box>

      <Box flex="1">
        <Container maxW="container.xl" py={8}>
          <VStack align="stretch" gap={8}>
            {/* Cabeçalho do Dashboard */}
            <Box>
              <Heading 
                size="xl" 
                color="gray.800" 
                mb={2}
                fontWeight="bold"
              >
                Dashboard
              </Heading>
              <Text color="gray.600" fontSize="md">
                Gerencie seus produtos, pedidos e estatísticas
              </Text>
            </Box>

            <Box 
              height="1px" 
              bg="gray.200" 
              width="100%" 
              my={2}
            />

            {/* Menu de Navegação */}
            <Box>
              <DashMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </Box>

            {/* Conteúdo Principal */}
            <Box
              bg="white"
              borderRadius="xl"
              boxShadow="sm"
              border="1px solid"
              borderColor="gray.200"
              p={8}
              minH="600px"
            >
              <DashBody activeMenu={activeMenu} />
            </Box>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

export default Dashboard
