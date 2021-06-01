import React, { useState } from 'react';

const Contador2 = () => {

    const [numero, setNumero] = useState(0);
    const aumentar = () => {
        setNumero(numero + 1);
    }

    const disminuir = () => {
        numero <= 0 ? setNumero(': O numero não pode ser negativo') : setNumero(numero - 1);
    }

    return (
        <div>
            <p>Mi tercer componente {numero}</p>
            <button onClick={aumentar}>Acrescentar</button>
            <button onClick={disminuir}>Decrementar</button>
        </div>
    )

};

export default Contador2;