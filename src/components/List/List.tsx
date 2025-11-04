"use client"

import {
  Box,
  Flex,
  Image,
  Listbox,
  Text,
  createListCollection,
} from "@chakra-ui/react"
import { useState } from "react"


const List = () => {
  const [selectedImage, setSelectedImage] = useState<string>("smartphones")

  const handleSelectionChange = (details: any) => {
    if (details.value.length > 0) {
      setSelectedImage(details.value[0])
    }
  }

  const currentImage = images.items.find((img) => img.value === selectedImage)

  return (
    <Flex gap="6" maxW="800px">
      <Listbox.Root
        maxW="3sxs"
        collection={images}
        value={[selectedImage]}
        onValueChange={handleSelectionChange}
        variant="solid"
      >
        <Listbox.Content border="0">
          {images.items.map((image) => (
            <Listbox.Item item={image} key={image.value}>
              <Listbox.ItemText>{image.label}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>

      <Box flex="1">
        {currentImage && (
          <Box>
            <Text fontSize="lg" fontWeight="semibold" mb="4">
              {currentImage.label}
            </Text>
            <Image
              src={currentImage.url}
              alt={currentImage.label}
              borderRadius="md"
              maxH="800px"
              width="full"
              objectFit="cover"
            />
            <Text fontSize="sm" color="fg.muted" mt="3">
              {currentImage.description}
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  )
}

const images = createListCollection({
  items: [
    {
      label: "SMARTPHONE BRANCO",
      value: "Smartphones",
      description: "R$3499,99",
      url: "https://images.unsplash.com/photo-1634403665481-74948d815f03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    },
    {
      label: "SMARTWATCH PRETO",
      value: "SMARTWATCH",
      description: "R$499,99",
      url: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872",
    },
    {
      label: "HEADPHONE CINZA ESCURO",
      value: "forest",
      description: "R$399,99",
      url: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388",
    },
    {
      label: "KIT MOUSE/TECLADO BRANCOS",
      value: "city",
      description: "R$249,90",
      url: "https://plus.unsplash.com/premium_photo-1683543124615-fb42e42c6201?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871",
    },
    {
      label: "CONSOLE VIDEOGAME COMPLETO",
      value: "desert",
      description: "R$3999,99",
      url: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
    },
    {
      label: "JOYSTICKS VARIADOS COLORIDOS",
      value: "deserty",
      description: "R$549,90",
      url: "https://images.unsplash.com/photo-1632312527375-bd5d5a0d3484?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    },
  ],
})
export default List