import PedidosLista from "../components/PedidoProdutosAdmin/PedidosLista/PedidosLista";

const PedidoProdutosAdmin = () => {
  return (
    <div className="row">
        <div className="col-3">
            <button className="btn btn-primary">Voltar</button>
            <PedidosLista />
        </div>
        <div className="col-6">Meio</div>
        <div className="col-3">Direita</div>
    </div>
  )
}

export default PedidoProdutosAdmin