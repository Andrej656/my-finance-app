import { createContext, useState } from 'react';

export const TradeContext = createContext();

export const TradeProvider = ({ children }) => {
  const [state, setState] = useState({ user: null, orders: [] });

  return (
    <TradeContext.Provider value={{ state, setState }}>
      {children}
    </TradeContext.Provider>
  );
};
