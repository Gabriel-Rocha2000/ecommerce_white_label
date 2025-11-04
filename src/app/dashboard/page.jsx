import { Grid, GridItem, Box, Listbox, createListCollection, Text, Center } from "@chakra-ui/react"
import Criar from "@/components/criar/criar"
import List from "@/components/List/List"
import Grafico from "@/components/grafico/grafico"
import Header from "@/components/header/header"
import { start } from "repl"

const Demo = () => {
  return (
   
    <>
     <Header box-shadow="5px 5px 10px 2px rgba(0, 0, 0, 0.5)"/>
        <Criar />
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1}>

       <Text  as="h1" fontSize="50" mb="6" color="gray.700" fontWeight="semibold" marginTop={65} marginBottom={30}> Produtos Cadastrados</Text> 
       <List />
      </GridItem>
      <GridItem colSpan={2}>
        <Box>colSpan=2</Box>
      </GridItem>
      <GridItem colSpan={2}>
        <Box>colSpan=2</Box>
      </GridItem>
      <GridItem colSpan={4}>
        <Text fontSize="lg" textAlign="Center" fontWeight="semibold" mb="3" marginTop={25} marginBottom={15}> Gráfico de Vendas</Text>
        <Grafico/>
      </GridItem>
    </Grid>
    </>
  )
}
export default Demo