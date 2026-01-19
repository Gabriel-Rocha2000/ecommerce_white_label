"use client"

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Image
} from "@chakra-ui/react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      as="footer"
      bg="gray.900"
      color="white"
      mt="auto"
      borderTop="1px solid"
      borderColor="gray.700"
    >
      <Container maxW="container.xl" py={10}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={8}
          mb={8}
        >
          {/* Logo e Descrição */}
          <GridItem>
            <VStack align="start" gap={4}>
              <HStack gap={2}>
                <Image
                  src="./icon.svg"
                  alt="Logo"
                  width="32px"
                  height="32px"
                />
                <Heading size="md" color="white">
                  E-Commerce
                </Heading>
              </HStack>
              <Text color="gray.400" fontSize="sm" lineHeight="tall">
                Sua loja online completa com os melhores produtos e preços.
              </Text>
            </VStack>
          </GridItem>

          {/* Links Rápidos */}
          <GridItem>
            <VStack align="start" gap={4}>
              <Heading size="sm" color="white" mb={2}>
                Links Rápidos
              </Heading>
              <VStack align="start" gap={2}>
                <Link
                  href="/"
                  color="gray.400"
                  _hover={{ color: "white", textDecoration: "underline" }}
                  fontSize="sm"
                >
                  Início
                </Link>
                <Link
                  href="/listing"
                  color="gray.400"
                  _hover={{ color: "white", textDecoration: "underline" }}
                  fontSize="sm"
                >
                  Produtos
                </Link>
                <Link
                  href="/dashboard"
                  color="gray.400"
                  _hover={{ color: "white", textDecoration: "underline" }}
                  fontSize="sm"
                >
                  Dashboard
                </Link>
                <Link
                  href="/shopping"
                  color="gray.400"
                  _hover={{ color: "white", textDecoration: "underline" }}
                  fontSize="sm"
                >
                  Carrinho
                </Link>
              </VStack>
            </VStack>
          </GridItem>

          {/* Suporte */}
          <GridItem>
            <VStack align="start" gap={4}>
              <Heading size="sm" color="white" mb={2}>
                Suporte
              </Heading>
              <VStack align="start" gap={2}>
                <Link
                  href="#"
                  color="gray.400"
                  _hover={{ color: "white", textDecoration: "underline" }}
                  fontSize="sm"
                >
                  Central de Ajuda
                </Link>
                <Link
                  href="#"
                  color="gray.400"
                  _hover={{ color: "white", textDecoration: "underline" }}
                  fontSize="sm"
                >
                  Política de Privacidade
                </Link>
                <Link
                  href="#"
                  color="gray.400"
                  _hover={{ color: "white", textDecoration: "underline" }}
                  fontSize="sm"
                >
                  Termos de Uso
                </Link>
                <Link
                  href="#"
                  color="gray.400"
                  _hover={{ color: "white", textDecoration: "underline" }}
                  fontSize="sm"
                >
                  Contato
                </Link>
              </VStack>
            </VStack>
          </GridItem>

          {/* Redes Sociais */}
          <GridItem>
            <VStack align="start" gap={4}>
              <Heading size="sm" color="white" mb={2}>
                Siga-nos
              </Heading>
              <VStack align="start" gap={2}>
                <Link
                  href="#"
                  color="gray.400"
                  _hover={{ color: "white", textDecoration: "underline" }}
                  fontSize="sm"
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  color="gray.400"
                  _hover={{ color: "white", textDecoration: "underline" }}
                  fontSize="sm"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  color="gray.400"
                  _hover={{ color: "white", textDecoration: "underline" }}
                  fontSize="sm"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  color="gray.400"
                  _hover={{ color: "white", textDecoration: "underline" }}
                  fontSize="sm"
                >
                  LinkedIn
                </Link>
              </VStack>
            </VStack>
          </GridItem>
        </Grid>

        {/* Copyright */}
        <Box
          borderTop="1px solid"
          borderColor="gray.700"
          pt={6}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text color="gray.400" fontSize="sm" textAlign={{ base: "center", md: "left" }}>
              © {currentYear} 
            </Text>
            <Text color="gray.400" fontSize="sm" textAlign={{ base: "center", md: "right" }}>
              
            </Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

