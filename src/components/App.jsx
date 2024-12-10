import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Button } from 'react-bootstrap';

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
        <div>
            <h1>{message}</h1>
            <button className='btn btn-primary'>Teste</button>
            <Button variant="primary">Teste2</Button>
        </div>
    );
}
export default App
