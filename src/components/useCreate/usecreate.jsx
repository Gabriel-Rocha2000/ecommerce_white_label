"use client"

import { useState } from "react"
import {
  Button, Field, Fieldset, Input, NativeSelect,
  CloseButton, Drawer, Portal
} from "@chakra-ui/react"
import { FaImage } from "react-icons/fa";

const UseCreate = ({ productToEdit = null }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [name, setName] = useState("")
  const [valor, setValor] = useState("")
  const [imagem, setImagem] = useState("")
  const [category, setCategory] = useState("Eletronicos")

  // Abre o Drawer e carrega dados para edição
  const handleOpen = (product) => {
    if (product) {
      setName(product.name || "")
      setValor(product.valor || "")
      setImagem(product.imagem || "")
      setCategory(product.category || "Eletronicos")
    }
    setIsOpen(true)
  }

  const handleClose = () => setIsOpen(false)

  return (
    <>
      {/* Botão que abre o Drawer */}
      <Button variant="outline" size="sm" onClick={() => handleOpen(productToEdit)}>
        {productToEdit ? "Editar produto" : "Cadastro de produtos"}
      </Button>

      <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner padding="4">
            <Drawer.Content rounded="md">
              <Drawer.Header>
                <Drawer.Title>
                  {productToEdit ? "Editar produto" : "Cadastro de produtos"}
                </Drawer.Title>
              </Drawer.Header>

              <Drawer.Body>
                <Fieldset.Root size="lg" maxW="md">

                  <Fieldset.Content>

                    <Field.Root>
                      <Field.Label>Produto</Field.Label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Field.Root>

                    <Field.Root>
                      <Field.Label>Valor</Field.Label>
                      <Input
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                      />
                    </Field.Root>

                    <Field.Root>
                      <Field.Label>Imagem</Field.Label>
                      <FaImage />
                      <Input
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                      />
                    </Field.Root>

                    <Field.Root>
                      <Field.Label>Categoria</Field.Label>
                      <NativeSelect.Root>
                        <NativeSelect.Field
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          {["Eletronicos", "Smartphones", "Games", "Periféricos"]
                            .map((item) => (
                              <option key={item} value={item}>{item}</option>
                          ))}
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                      </NativeSelect.Root>
                    </Field.Root>

                  </Fieldset.Content>

                  <Button type="submit" alignSelf="flex-start">
                    {productToEdit ? "Salvar alterações" : "Cadastrar"}
                  </Button>

                </Fieldset.Root>
              </Drawer.Body>

              <Drawer.Footer>
                <Button variant="outline" onClick={handleClose}>Cancelar</Button>
              </Drawer.Footer>

              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>

            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  )
}

export default UseCreate;
