"use client"

import { useState } from "react"
import { 
  Box, 
  VStack, 
  HStack, 
  Image, 
  Text, 
  Card,
  Flex,
  Button,
  Dialog,
  IconButton,
  Portal
} from "@chakra-ui/react"
import { useProducts } from "@/context/ProductsContext"
import { FaEdit, FaTimes } from "react-icons/fa"

const List = ({ onEditProduct }) => {
  const { items } = useProducts()
  const [expandedImage, setExpandedImage] = useState(null)

  const handleImageClick = (item) => {
    setExpandedImage(item)
  }

  const closeExpandedImage = () => {
    setExpandedImage(null)
  }

  if (items.length === 0) {
    return (
      <Box py={8} textAlign="center">
        <Text color="gray.500" fontSize="md">
          Nenhum produto cadastrado ainda.
        </Text>
      </Box>
    )
  }

  return (
    <>
      <VStack align="stretch" gap={4}>
        {items.map((item) => (
          <Card.Root 
            key={item.value} 
            variant="outline"
            _hover={{
              boxShadow: "md",
              transform: "translateY(-2px)",
              transition: "all 0.2s",
            }}
          >
            <Card.Body>
              <Flex 
                direction={{ base: "column", md: "row" }} 
                gap={4} 
                align={{ base: "start", md: "center" }}
              >
                <Box 
                  flexShrink={0}
                  w={{ base: "100%", md: "120px" }}
                  h={{ base: "200px", md: "120px" }}
                  borderRadius="md"
                  overflow="hidden"
                  bg="gray.100"
                  cursor="pointer"
                  onClick={() => handleImageClick(item)}
                  _hover={{
                    opacity: 0.9,
                    transform: "scale(1.02)",
                    transition: "all 0.2s"
                  }}
                  position="relative"
                >
                  <Image
                    src={item.url}
                    alt={item.label}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    loading="lazy"
                  />
                  <Box
                    position="absolute"
                    top={2}
                    right={2}
                    bg="blackAlpha.600"
                    color="white"
                    px={2}
                    py={1}
                    borderRadius="sm"
                    fontSize="xs"
                    display={{ base: "block", md: "none" }}
                  >
                    Clique para expandir
                  </Box>
                </Box>

                <Flex 
                  direction="column" 
                  flex="1" 
                  gap={2}
                  justify="center"
                >
                  <Text 
                    fontSize="lg" 
                    fontWeight="semibold" 
                    color="gray.800"
                  >
                    {item.label}
                  </Text>
                  
                  <Text
                    fontSize="md"
                    fontWeight="medium"
                    color="blue.600"
                    bg="blue.50"
                    px={3}
                    py={1}
                    borderRadius="md"
                    display="inline-block"
                    width="fit-content"
                  >
                    {item.description}
                  </Text>
                </Flex>

                <Box>
                  <Button
                    size="sm"
                    colorScheme="blue"
                    variant="outline"
                    leftIcon={<FaEdit />}
                    onClick={(e) => {
                      e.stopPropagation()
                      onEditProduct && onEditProduct(item)
                    }}
                  >
                    Editar
                  </Button>
                </Box>
              </Flex>
            </Card.Body>
          </Card.Root>
        ))}
      </VStack>

      {/* Modal para imagem expandida */}
      {expandedImage && (
        <Dialog.Root open={!!expandedImage} onOpenChange={(e) => !e.open && closeExpandedImage()}>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content maxW="90vw" maxH="90vh" p={0}>
                <Dialog.Header>
                  <Flex justify="space-between" align="center" w="100%">
                    <Text fontSize="lg" fontWeight="semibold">
                      {expandedImage.label}
                    </Text>
                    <IconButton
                      variant="ghost"
                      size="sm"
                      onClick={closeExpandedImage}
                      aria-label="Fechar"
                    >
                      <FaTimes />
                    </IconButton>
                  </Flex>
                </Dialog.Header>
                <Dialog.Body p={0} display="flex" justifyContent="center" alignItems="center">
                  <Box
                    w="100%"
                    h={{ base: "300px", md: "500px" }}
                    maxH="80vh"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bg="blackAlpha.50"
                    p={4}
                  >
                    <Image
                      src={expandedImage.url}
                      alt={expandedImage.label}
                      maxW="100%"
                      maxH="100%"
                      objectFit="contain"
                      borderRadius="md"
                    />
                  </Box>
                </Dialog.Body>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      )}
    </>
  )
}

export default List

