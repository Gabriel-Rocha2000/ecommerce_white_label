"use client"

import { Button,Field,
  Fieldset,
  For,
  Input,
  Listbox,
  NativeSelect,
  Stack, CloseButton, Image, Drawer, Portal } from "@chakra-ui/react"


const Criar = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          Cadastro de produtos
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner padding="4">
          <Drawer.Content rounded="md">
            <Drawer.Header>
              <Drawer.Title>Cadastro de produtos</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Fieldset.Root size="lg" maxW="md">
      

      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Produto</Field.Label>
          <Input name="name" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Valor</Field.Label>
          <Input name="valor" type="valor" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Categoria</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field name="category">
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

      <Button type="submit" alignSelf="flex-start">
        Cadastrar
      </Button>
    </Fieldset.Root>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
export default Criar