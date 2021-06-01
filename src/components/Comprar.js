import React, { useState } from 'react';

const Comprar = () => {

    const [buyList] = useState([
        {
            id: 1,
            name: 'uva',
            quantity: 2
        },
        {
            id: 2,
            name: 'maçã',
            quantity: 5
        },
        {
            id: 3,
            name: 'laranja',
            quantity: 10
        },
        {
            id: 4,
            name: 'melancia',
            quantity: 1
        }
    ])

    return (
        <ul>
            {
                buyList.map((item, index) =>
                    <li>Comprar {item.name} - Quantidade {item.id}</li>

                )
            }
        </ul>

    )

}

export default Comprar;