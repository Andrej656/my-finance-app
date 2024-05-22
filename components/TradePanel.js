import { useState } from 'react';

const TradePanel = () => {
  const [buyAmount, setBuyAmount] = useState('');
  const [sellAmount, setSellAmount] = useState('');

  const handleBuy = () => {
    // Handle buy logic
  };

  const handleSell = () => {
    // Handle sell logic
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Trade</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buy Amount"
          value={buyAmount}
          onChange={(e) => setBuyAmount(e.target.value)}
          className="border p-2 w-full"
        />
        <button onClick={handleBuy} className="bg-green-500 text-white p-2 mt-2 w-full">Buy</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Sell Amount"
          value={sellAmount}
          onChange={(e) => setSellAmount(e.target.value)}
          className="border p-2 w-full"
        />
        <button onClick={handleSell} className="bg-red-500 text-white p-2 mt-2 w-full">Sell</button>
      </div>
    </div>
  );
};

export default TradePanel;
