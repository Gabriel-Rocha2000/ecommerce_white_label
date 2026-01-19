import { Box, Grid, GridItem, Heading, Image, Text, Card } from "@chakra-ui/react";

const Teatured = () => {
  const products = [
    { 
      id: 1, 
      name: "EAquaPhone X2",
      image: "/phone.svg", 
      price: "$299"
    },
    { 
      id: 2, 
      name: "SCloudPods Pro", 
      image: "/hset.svg",
      price: "$199"
    },
    { 
      id: 3,
      name: "AChronoWatch Eiite", 
      image: "/watch.svg",
      price: "$99"
    },
    {
      id: 4,
      name: "CSoundSphere Go",
      image: "/sound.svg",
      price: "$149"
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
        PRODUTOS EM DESTAQUE
      </Heading>

      <Grid
        templateColumns={{ 
          base: "1fr", 
          sm: "repeat(2, 1fr)", 
          lg: "repeat(4, 1fr)" 
        }}
        gap={6}
      >
        {products.map((product) => (
          <GridItem key={product.id}>
            <Card.Root
              variant="outline"
              bg="white"
              _hover={{
                boxShadow: "xl",
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
                    src={product.image}
                    alt={product.name}
                    mb={4}
                    bg="gray.50"
                    p={4}
                    borderRadius="md"
                  />
                  <Text 
                    fontWeight="semibold" 
                    fontSize="md"
                    color="gray.800"
                    mb={2}
                  >
                    {product.name}
                  </Text>
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="blue.600"
                  >
                    {product.price}
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

export default Teatured;
