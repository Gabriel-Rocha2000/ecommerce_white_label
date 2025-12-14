import DashProdutos from "./dash-produtos";

const DashBody = ( {activeMenu}) => {

    switch(activeMenu){
        case "Produtos":
            return <DashProdutos/>
        case "Pedidos":
            return <div>Lista de Pedidos</div>
        default:
            return null

}
}
export default DashBody;