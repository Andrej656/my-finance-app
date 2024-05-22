import { useContext, useEffect } from 'react';
import { TradeContext } from '../context/TradeContext';

const OrderBook = () => {
  const { state, setState } = useContext(TradeContext);

  useEffect(() => {
    async function fetchOrders() {
      const res = await fetch('/api/orders');
      const data = await res.json();
      setState((prevState) => ({ ...prevState, orders: data }));
    }
    fetchOrders();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4">Order Book</h2>
      <ul>
        {state.orders.map((order, index) => (
          <li key={index} className={`flex justify-between ${order.type === 'buy' ? 'text-green-500' : 'text-red-500'}`}>
            <span>{order.price}</span>
            <span>{order.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderBook;
