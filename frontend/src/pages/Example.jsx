// import React, { useEffect, useState } from 'react';
// import './Example.css';

// const Example = ({ userId }) => {
//     const [userOrders, setUserOrders] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:3000/userOrders/${userId}`)
//             .then(response => response.json())
//             .then(data => setUserOrders(data))
//             .catch(error => console.error('Error:', error));
//     }, [userId]);

//     return (
//         <div className="user-orders">
//             {userOrders.map((order, index) => (
//                 <div key={index} className="order-details">
//                     <h2>Order ID: {order.order_id}</h2>
//                     <p>Items:</p>
//                     {order.items.split(";").map((item, index) => (
//                         <p key={index}>{item}</p>
//                     ))}
//                     <p>Total Price: {order.total_price}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Example;

import React, { useEffect, useState } from 'react';
import './Example.css';

const Example = ({ userId }) => {
    const [userOrders, setUserOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/userOrders/${userId}`)
            .then(response => response.json())
            .then(data => setUserOrders(data))
            .catch(error => console.error('Error:', error));
    }, [userId]);

    return (
        <div className="user-orders">
            {userOrders.map((order, index) => (
                <div key={index} className="order-details">
                    <h2>Order ID: {order.order_id}</h2>
                    {order.items && order.items.split(";").map((item, index) => {
                        const [itemId, itemName, itemQuantity, itemSubtotal] = item.split(",");

                        console.log(itemId)
                        console.log(itemName)
                        console.log(itemQuantity)
                        console.log(itemSubtotal)
                        return (
                            <div key={index}>
                                <p>{itemId && itemId.replace('Item ID: ', '')}</p>
                                <p>{itemName && itemName.replace(' Name: ', '')}</p>
                                <p> {itemQuantity && itemQuantity.replace(' Quantity: ', '')}</p>
                                <p> {itemSubtotal && itemSubtotal.replace(' Subtotal: ', '')}</p>
                                <br />
                            </div>
                        );
                    })}
                    <p>Total Price: {order.total_price}</p>
                </div>
            ))}
        </div>
    );
};

export default Example;
