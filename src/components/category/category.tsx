import { Grid, GridItem } from "@chakra-ui/react"


const Category = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="6" padding="8" marginTop="8">
      <GridItem w="100%" h="150" bg="blue.500" borderRadius="lg">  </GridItem>
      <GridItem w="100%" h="150" bg="green.500" borderRadius="lg"></GridItem>
      <GridItem w="100%" h="150" bg="red.500" borderRadius="lg" ></GridItem>
    </Grid>
  )
}

export default Category 