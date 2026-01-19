import DashProdutos from "./dash-produtos";
import { 
  Flex, 
  Box, 
  Text, 
  Heading,
  VStack,
  SimpleGrid,
  Card
} from "@chakra-ui/react";
import Grafico from "@/components/grafico/grafico";
import SalesSummary from "@/components/vendas/page";

const DashBody = ({ activeMenu }) => {
  switch(activeMenu) {
    case "Produtos":
      return <DashProdutos />
    
    case "Pedidos":
      return (
        <Box>
          <Heading size="lg" mb={6} color="gray.800">
            Lista de Pedidos
          </Heading>
          <Card.Root>
            <Card.Body>
              <VStack gap={4} align="stretch">
                <Text color="gray.600" textAlign="center" py={8}>
                  Nenhum pedido encontrado no momento.
                </Text>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Box>
      )
    
    case "Estatisticas":
      return (
        <Box>
          <Heading size="lg" mb={6} color="gray.800">
            Estatísticas
          </Heading>
          <SimpleGrid 
            columns={{ base: 1, lg: 2 }} 
            gap={6}
          >
            <Box
              bg="white"
              borderRadius="lg"
              p={6}
              boxShadow="sm"
              border="1px solid"
              borderColor="gray.200"
            >
              <Grafico />
            </Box>
            <Box
              bg="white"
              borderRadius="lg"
              p={6}
              boxShadow="sm"
              border="1px solid"
              borderColor="gray.200"
            >
              <SalesSummary />
            </Box>
          </SimpleGrid>
        </Box>
      )
    
    default:
      return null
  }
}

export default DashBody;