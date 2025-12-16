import DashProdutos from "./dash-produtos";
import { Flex } from "@chakra-ui/react";
import Grafico from "@/components/grafico/grafico";
import SalesSummary from "@/components/vendas/page";

const DashBody = ( {activeMenu}) => {

    switch(activeMenu){
        case "Produtos":
            return <DashProdutos/>
        case "Pedidos":
            return <div>Lista de Pedidos</div>
        case "Estatisticas":
            return (
                <Flex direction="row" gap={12}>
                <Grafico />
                <SalesSummary />
                </Flex>)
               
        default:
            return null

}
}
export default DashBody;