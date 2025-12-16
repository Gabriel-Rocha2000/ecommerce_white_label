import { Box, GridItem, Text } from "@chakra-ui/react";

export const SalesSummary = () => {
  return (
    <>


<GridItem colSpan={2} display="flex"
            flexDirection="row" gap={12} >
                
            <Box 
            
              bg="white"
              p={5}
              borderRadius="12px"
              boxShadow="md"
              border="1px solid #e2e8f0"
            >
              <Text fontWeight="bold" color="gray.700" fontSize="lg">Vendas no Mês</Text>
              <Text fontSize="3xl" fontWeight="extrabold" color="purple.600" mt={2}>R$ 4.500</Text>
              <Text fontSize="sm" color="red.500" mt={1}>-3% vs mês anterior</Text>
            </Box>
             <Box
              bg="white"
              p={5}
              borderRadius="12px"
              boxShadow="md"
              border="1px solid #e2e8f0"
            >
              <Text fontWeight="bold" color="gray.700" fontSize="lg">Vendas no Mês</Text>
              <Text fontSize="3xl" fontWeight="extrabold" color="purple.600" mt={2}>R$ 4.500</Text>
              <Text fontSize="sm" color="red.500" mt={1}>-3% vs mês anterior</Text>
            </Box>
          </GridItem>

 </>  );
};      
export default SalesSummary;         