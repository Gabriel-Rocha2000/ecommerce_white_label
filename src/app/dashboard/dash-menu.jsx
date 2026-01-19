import { Button, HStack, Box } from "@chakra-ui/react"

const DashMenu = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    { id: "Produtos", label: "Produtos" },
    { id: "Pedidos", label: "Pedidos" },
    { id: "Estatisticas", label: "Estatísticas" }
  ]

  return (
    <HStack gap={3} align="start">
      {menuItems.map((item) => (
        <Button
          key={item.id}
          variant={activeMenu === item.id ? "solid" : "outline"}
          colorScheme={activeMenu === item.id ? "blue" : "gray"}
          onClick={() => setActiveMenu(item.id)}
          borderRadius="md"
          fontWeight="medium"
          fontSize="sm"
          px={6}
          py={6}
          transition="all 0.2s"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "md"
          }}
          _active={{
            transform: "translateY(0)"
          }}
        >
          {item.label}
        </Button>
      ))}
    </HStack>
  )
}

export default DashMenu