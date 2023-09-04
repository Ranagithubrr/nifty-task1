import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function useLocalStorage(key, defaultValue) {
  const storedData = localStorage.getItem(key);
  const initialData = storedData ? JSON.parse(storedData) : defaultValue;

  const [data, setData] = useState(initialData);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
}

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
