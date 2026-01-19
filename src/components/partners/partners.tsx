import { Box, Flex, Image, Text, Heading, HStack, VStack, Grid, GridItem } from "@chakra-ui/react"

const Partners = () => {
  const partners = [
    { name: "TECHCO", logo: "/icontch.svg" },
    { name: "ELECTRO", logo: "" },
    { name: "GEARUP", logo: "" },
    { name: "NEXUS", logo: "" },
  ];

  return (
    <Box>
      <VStack gap={8} align="stretch">
        {/* Título */}
        <Heading 
          as="h2" 
          size={{ base: "lg", md: "xl" }} 
          color="gray.800"
          fontWeight="bold"
          textAlign="center"
        >
          PARCEIROS CONFIÁVEIS
        </Heading>

        {/* Newsletter */}
        <Box
          bg="gray.100"
          borderRadius="lg"
          p={8}
          textAlign="center"
        >
          <VStack gap={4}>
            <Text 
              fontWeight="bold" 
              fontSize={{ base: "md", md: "lg" }}
              color="gray.800"
            >
              FIQUE INFORMADO
            </Text>
            <Text 
              color="gray.600"
              fontSize="sm"
            >
              Receba ofertas exclusivas e atualizações
            </Text>
          </VStack>
        </Box>

        {/* Parceiros */}
        <Grid
          templateColumns={{ 
            base: "repeat(2, 1fr)", 
            md: "repeat(4, 1fr)" 
          }}
          gap={6}
        >
          {partners.map((partner, index) => (
            <GridItem key={index}>
              <Flex
                direction="column"
                align="center"
                justify="center"
                p={6}
                bg="white"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
                minH="120px"
                _hover={{
                  boxShadow: "md",
                  borderColor: "blue.300",
                  transition: "all 0.2s"
                }}
              >
                {partner.logo && (
                  <Image 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    boxSize="50px" 
                    objectFit="contain"
                    mb={3}
                  />
                )}
                <Text 
                  fontWeight="semibold"
                  color="gray.700"
                  fontSize="md"
                >
                  {partner.name}
                </Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  )
}

export default Partners