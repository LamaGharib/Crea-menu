import { createContext, useState, useEffect } from "react";
export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const data = async () => {
    try {
      setIsLoading(true);
      const result = await fetch("https://crea-menu.herokuapp.com/api/menu");
      const data = await result.json();
      setMenu(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <MenuContext.Provider
      value={{
        menu,
        cart,
        setCart,
        isLoading,
        error,
        total,
        setTotal,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
