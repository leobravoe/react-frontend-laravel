import PedidosLista from "../components/PedidoProdutosAdmin/PedidosLista/PedidosLista";
import PedidoSelecionado from "../components/PedidoProdutosAdmin/PedidoSelecionado/PedidoSelecionado"
import PedidoProdutos from "../components/PedidoProdutosAdmin/PedidoProdutos/PedidoProdutos"
import PedidoTotal from "../components/PedidoProdutosAdmin/PedidoTotal/PedidoTotal"
import PedidoProdutoAdd from "../components/PedidoProdutosAdmin/PedidoProdutoAdd/PedidoProdutoAdd";
import PedidoEndereco from "../components/PedidoProdutosAdmin/PedidoEndereco/PedidoEndereco";
import PedidoEstadoAcao from "../components/PedidoProdutosAdmin/PedidoEstadoAcao/PedidoEstadoAcao";

const PedidoProdutosAdmin = () => {
    return (
        <div className="row">
            <div className="col-3">
                <button className="btn btn-primary w-100">Voltar</button>
                <PedidosLista />
            </div>
            <div className="col-6">
                <PedidoSelecionado />
                <PedidoProdutos />
                <PedidoTotal />
            </div>
            <div className="col-3">
                <PedidoProdutoAdd />
                <PedidoEndereco />
                <PedidoEstadoAcao />
                <PedidoEstadoAcao />
                <PedidoEstadoAcao />
                <PedidoEstadoAcao />
            </div>
        </div>
    )
}

export default PedidoProdutosAdmin