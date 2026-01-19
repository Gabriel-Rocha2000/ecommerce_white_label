import { Box, Grid, GridItem, Heading, Image, Text, Card } from "@chakra-ui/react";

const Category = () => {
  const categories = [
    { 
      id: 1, 
      name: "Electronics",
      image: "/ph.svg" 
    },
    { 
      id: 2, 
      name: "Smart Home Wearables", 
      image: "/hp.svg" 
    },
    { 
      id: 3,
      name: "Audio Gaming", 
      image: "/ct.svg" 
    },
    {
      id: 4,
      name: "Camess Accessories",
      image: "/acs.svg" 
    },
  ];

  return (
    <Box>
      <Heading 
        as="h2" 
        size={{ base: "lg", md: "xl" }} 
        mb={8} 
        color="gray.800"
        fontWeight="bold"
        textAlign="center"
      >
        CATEGORIAS
      </Heading>

      <Grid
        templateColumns={{ 
          base: "1fr", 
          sm: "repeat(2, 1fr)", 
          lg: "repeat(4, 1fr)" 
        }}
        gap={6}
      >
        {categories.map((category) => (
          <GridItem key={category.id}>
            <Card.Root
              variant="outline"
              _hover={{
                boxShadow: "lg",
                transform: "translateY(-4px)",
                transition: "all 0.3s ease-in-out",
                borderColor: "blue.300"
              }}
              cursor="pointer"
            >
              <Card.Body>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  py={4}
                >
                  <Image
                    rounded="md"
                    h={{ base: "150px", md: "180px" }}
                    w="100%"
                    fit="contain"
                    src={category.image}
                    alt={category.name}
                    mb={4}
                  />
                  <Text 
                    fontWeight="semibold" 
                    fontSize="md"
                    color="gray.700"
                  >
                    {category.name}
                  </Text>
                </Box>
              </Card.Body>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
