"use client"

import Banner from "@/components/banner/banner"
import Header from "@/components/header/header"
import Category from "@/components/category/category"
import Teatured from "@/components/teatured/teatured"
import Partners from "@/components/partners/partners"
import Footer from "@/components/footer/footer"
import { Box, Container, VStack } from "@chakra-ui/react"

export const Home = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column" bg="gray.50">
      {/* Header */}
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

      {/* Conteúdo Principal */}
      <Box flex="1" as="main">
        <VStack align="stretch" gap={0} spacing={0}>
          {/* Banner Hero */}
          <Box py={8}>
            <Container maxW="container.xl">
              <Banner />
            </Container>
          </Box>

          {/* Categorias */}
          <Box py={12} bg="white">
            <Container maxW="container.xl">
              <Category />
            </Container>
          </Box>

          {/* Produtos em Destaque */}
          <Box py={12} bg="gray.50">
            <Container maxW="container.xl">
              <Teatured />
            </Container>
          </Box>

          {/* Parceiros */}
          <Box py={12} bg="white">
            <Container maxW="container.xl">
              <Partners />
            </Container>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  )
}

export default Home