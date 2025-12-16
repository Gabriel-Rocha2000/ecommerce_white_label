import {Button, HStack, Stack, VStack} from "@chakra-ui/react"


const DashMenu = ({ activeMenu, setActiveMenu }) => { 

    
  return (
    <HStack spacing={4} align="start">
      <Button colorScheme ={activeMenu ==="Produtos"? "gray":"white"} onClick ={()=> setActiveMenu("Produtos")} >Produtos </Button>
      <Button colorScheme ={activeMenu ==="Produtos"? "gray":"white"} onClick ={()=> setActiveMenu("Pedidos")} >Pedidos</Button>
      <Button colorScheme ={activeMenu ==="Produtos"? "gray":"white"} onClick ={()=> setActiveMenu("Estatisticas")} >Estatisticas</Button>
    </HStack>
  )
}

export default DashMenu