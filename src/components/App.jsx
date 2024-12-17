import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import PedidoProdutosAdmin from '../pages/PedidoProdutosAdmin'

function App() {
    const [message, setMessage] = useState('teste');
    useEffect(() => {
        const runUseEffect = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/example')
            const data = await response.json();
            setMessage(data.message);
        }
        runUseEffect();
    }, []);
    return (
        <>
            {/* <h1>{message}</h1> */}
            <PedidoProdutosAdmin />
        </>
    );
}
export default App
