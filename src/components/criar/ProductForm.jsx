"use client"
import { useState, useEffect } from "react"
import { Button, Field, Fieldset, For, Input, NativeSelect, Box, Text, HStack } from "@chakra-ui/react"
import { FaImage } from "react-icons/fa"
import { useProducts } from "@/context/ProductsContext"

export const ProductForm = ({ onCancel, onSave, editingProduct }) => {
  const [produto, setProduto] = useState("")
  const [valor, setValor] = useState("")
  const [imagem, setImagem] = useState("")
  const [categoria, setCategoria] = useState("Eletronicos")
  const { addItem, updateItem } = useProducts()

  // Preencher formulário quando estiver editando
  useEffect(() => {
    if (editingProduct) {
      setProduto(editingProduct.label)
      // Remover "R$" do valor se existir
      const valorSemR = editingProduct.description.replace("R$", "").trim()
      setValor(valorSemR)
      setImagem(editingProduct.url)
      setCategoria("Eletronicos") // Pode ser melhorado para incluir categoria
    } else {
      // Limpar campos se não estiver editando
      setProduto("")
      setValor("")
      setImagem("")
      setCategoria("Eletronicos")
    }
  }, [editingProduct])

  const handleSave = () => {
    if (produto && valor && imagem) {
      if (editingProduct) {
        // Modo de edição
        updateItem(editingProduct.value, {
          label: produto.toUpperCase(),
          description: valor.startsWith("R$") ? valor : `R$${valor}`,
          url: imagem,
        })
      } else {
        // Modo de criação
        const newItem = {
          label: produto.toUpperCase(),
          value: produto.replace(/\s+/g, "").toLowerCase() + Date.now(),
          description: valor.startsWith("R$") ? valor : `R$${valor}`,
          url: imagem,
        }
        addItem(newItem)
      }
      
      // Limpar campos
      setProduto("")
      setValor("")
      setImagem("")
      setCategoria("Eletronicos")
      
      if (onSave) onSave()
    }
  }

  const handleCancel = () => {
    setProduto("")
    setValor("")
    setImagem("")
    setCategoria("Eletronicos")
    if (onCancel) onCancel()
  }

  return (
    <Fieldset.Root size="lg" maxW="md">
      {editingProduct && (
        <Box mb={4} pb={4} borderBottom="1px solid" borderColor="gray.200">
          <Text fontSize="sm" color="blue.600" fontWeight="semibold">
            Editando: {editingProduct.label}
          </Text>
        </Box>
      )}
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Produto</Field.Label>
          <Input 
            name="name" 
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
            placeholder="Nome do produto"
          />
        </Field.Root>

        <Field.Root>
          <Field.Label>Valor</Field.Label>
          <Input 
            name="valor" 
            type="text"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="Ex: 3499,99"
          />
        </Field.Root>
        
        <Field.Root>
          <Field.Label>Imagem</Field.Label>
          <HStack gap={2}>
            <FaImage />
            <Input 
              name="Imagem" 
              type="url"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
              placeholder="URL da imagem"
            />
          </HStack>
        </Field.Root>
        
        <Field.Root>
          <Field.Label>Categoria</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field 
              name="category"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <For each={["Eletronicos", "Smartphones", "Games", "Periféricos"]}>
                {(item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )}
              </For>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
      </Fieldset.Content>

      <Box display="flex" gap="2" mt="4">
        <Button variant="outline" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button colorScheme="blue" onClick={handleSave}>
          {editingProduct ? "Atualizar" : "Salvar"}
        </Button>
      </Box>
    </Fieldset.Root>
  )
}

