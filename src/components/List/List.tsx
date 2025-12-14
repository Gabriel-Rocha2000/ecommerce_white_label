"use client"

import {
  Box,
  Flex,
  Image,
  Listbox,
  Text,
  createListCollection,
  Input,
  Button,
} from "@chakra-ui/react"
import { useState, useMemo } from "react"
import { useProducts } from "@/context/ProductsContext"


const List = () => {
  const [selectedImage, setSelectedImage] = useState<string>("smartphones")
  const [editingItem, setEditingItem] = useState<string | null>(null)
  const [editedLabel, setEditedLabel] = useState<string>("")
  const [editedDescription, setEditedDescription] = useState<string>("")
  const { items, updateItem } = useProducts()

  const handleSelectionChange = (details: any) => {
    if (details.value.length > 0) {
      setSelectedImage(details.value[0])
    }
  }

  const handleItemClick = (itemValue: string) => {
    const item = items.find((img) => img.value === itemValue)
    if (item) {
      setEditingItem(itemValue)
      setEditedLabel(item.label)
      setEditedDescription(item.description)
    }
  }

  const handleSaveEdit = () => {
    if (editingItem) {
      updateItem(editingItem, {
        label: editedLabel,
        description: editedDescription,
      })
      setEditingItem(null)
    }
  }

  const handleCancelEdit = () => {
    setEditingItem(null)
    setEditedLabel("")
    setEditedDescription("")
  }

  const currentImage = items.find((img) => img.value === selectedImage)

  const dynamicCollection = useMemo(() => {
    return createListCollection({ items })
  }, [items])

  return (
    <Flex gap="6" maxW="800px">
      <Listbox.Root
        maxW="3sxs"
        collection={dynamicCollection}
        value={[selectedImage]}
        onValueChange={handleSelectionChange}
        variant="solid"
      >
        <Listbox.Content border="0">
          {items.map((image) => (
            <Listbox.Item 
              item={image} 
              key={image.value}
              onClick={() => handleItemClick(image.value)}
              cursor="pointer"
            >
              {editingItem === image.value ? (
                <Box width="100%" p="2">
                  <Input
                    value={editedLabel}
                    onChange={(e) => setEditedLabel(e.target.value)}
                    size="sm"
                    mb="2"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <Input
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    size="sm"
                    mb="2"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <Flex gap="2">
                    <Button
                      size="xs"
                      colorScheme="green"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleSaveEdit()
                      }}
                    >
                      Salvar
                    </Button>
                    <Button
                      size="xs"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCancelEdit()
                      }}
                    >
                      Cancelar
                    </Button>
                  </Flex>
                </Box>
              ) : (
                <>
                  <Listbox.ItemText>{image.label}</Listbox.ItemText>
                  <Listbox.ItemIndicator />
                </>
              )}
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

export default List


