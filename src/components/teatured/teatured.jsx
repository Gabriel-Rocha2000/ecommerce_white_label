import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

const Category = () => {
  const categories = [
  {  "id": 1, 
       "name": "EAquaPhone X2",
       "image": "/phone.svg", 
        "price": "$299"
      },
    { "id": 2, 
      "name": "SCloudPods Pro", 
      "image": "/hset.svg" ,
      "price": "$199"
    },
  { "id": 3,
     "name": "AChronoWatch Eiite", 
     "image": "/watch.svg" ,
     "price": "$99"
    },
    {"id": 4,
       "name": "CSoundSphere Go",
        "image": "/sound.svg" },
  ];

  return (
    <Box maxW="85%" mx="auto" mt="8" textAlign="start">
     
      <Heading as="h1" fontSize="13" mb="6" color="gray.700">
        TEATURED PRODUCTS
      </Heading>

      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="8"
        p="4"
        bg="#FEFEFE"
        borderRadius="md"
      >
        {categories.map((e) => (
          <GridItem
            key={e.id}
            border="1px solid #E2E8F0"
            p="4"
            textAlign="center"
            _hover={{
              boxShadow: "md",
              transform: "scale(1.05)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              <Image
                rounded="sm"
                h="200px"
                w="300px"
                fit="contain"
                src={e.image}
                alt={e.name}
              />
              <Text mt="3" fontWeight="500">
                {e.name}
                {e.price ? ` - ${e.price}` : ''}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
