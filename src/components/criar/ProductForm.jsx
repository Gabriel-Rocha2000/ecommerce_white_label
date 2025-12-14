"use client"
import { useState } from "react"
import { Button, Field, Fieldset, For, Input, NativeSelect, Box } from "@chakra-ui/react"
import { FaImage } from "react-icons/fa"
import { useProducts } from "@/context/ProductsContext"

export const ProductForm = ({ onCancel, onSave }) => {
  const [produto, setProduto] = useState("")
  const [valor, setValor] = useState("")
  const [imagem, setImagem] = useState("")
  const [categoria, setCategoria] = useState("Eletronicos")
  const { addItem } = useProducts()

  const handleSave = () => {
    if (produto && valor && imagem) {
      const newItem = {
        label: produto.toUpperCase(),
        value: produto.replace(/\s+/g, "").toLowerCase() + Date.now(),
        description: valor.startsWith("R$") ? valor : `R$${valor}`,
        url: imagem,
      }
      addItem(newItem)
      
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
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Produto</Field.Label>
          <Input 
            name="name" 
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
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
          <FaImage />
          <Input 
            name="Imagem" 
            type="url"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            placeholder="URL da imagem"
          />
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
        <Button onClick={handleSave}>
          Salvar
        </Button>
      </Box>
    </Fieldset.Root>
  )
}

