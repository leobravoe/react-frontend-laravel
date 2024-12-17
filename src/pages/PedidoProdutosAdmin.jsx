import PedidosLista from "../components/PedidoProdutosAdmin/PedidosLista/PedidosLista";
import PedidoSelecionado from "../components/PedidoProdutosAdmin/PedidoSelecionado/PedidoSelecionado"
import PedidoProdutos from "../components/PedidoProdutosAdmin/PedidoProdutos/PedidoProdutos"
import PedidoTotal from "../components/PedidoProdutosAdmin/PedidoTotal/PedidoTotal"

const PedidoProdutosAdmin = () => {
    return (
        <div className="row">
            <div className="col-3">
                <button className="btn btn-primary">Voltar</button>
                <PedidosLista />
            </div>
            <div className="col-6">
                <PedidoSelecionado />
                <PedidoProdutos />
                <PedidoTotal />
            </div>
            <div className="col-3">Direita</div>
        </div>
    )
}

export default PedidoProdutosAdmin