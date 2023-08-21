import { createContext, useContext, useState, useReducer } from "react";
import { productImage } from "../components/Hero";

export const AppContext = createContext();

const initialState = {
  amount: 0,
  cart: {
    name: "",
    price: 0,
    amount: 0,
    totalAmount: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, amount: state.amount + 1 };
    case "DECREASE":
      return { ...state, amount: state.amount - 1 };
    case "ADD_TO_CART":
      const currentCartItem = {
        name: "Fall limited Edition",
        price: "$125",
        amount: state.amount,
        totalAmount: state.amount * 125,
      };
      return {
        ...state,
        cart: {
          ...state.cart,
          name: "Fall limited Edition",
          price: "$125",
          amount: state.cart.amount + state.amount,
          totalAmount: state.cart.totalAmount + currentCartItem.totalAmount,
        },
      };
    case "DELETE":
      return { ...state, amount: 0, cart: {...state, name: "",price:'', amount: 0,totalAmount:0 } };
    default:
      return state;
  }
};
export const AppProvider = ({ children }) => {
  const [product, setProduct] = useState([productImage[0]]);
  
  const [state, dispatch] = useReducer(reducer, initialState);
  

  const increaseAmount = () => {
    if (state.amount === 30) {
      return 30;
    }
    dispatch({ type: "INCREASE" });
  };
  const decreaseAmount = () => {
    if (state.amount === 0) {
      return 0;
    }
    dispatch({ type: "DECREASE" });
  };

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART" });
   
  };

  const deleteProduct = () => {
    dispatch({ type: "DELETE" });
  };

    const setSessionData = () => {
      sessionStorage.setItem("cart", JSON.stringify(cart));
  };
    const getSessionData = () => {
      return JSON.parse(sessionStorage.getItem("cart"));
    };
   

  return (
    <AppContext.Provider
      value={{
        ...state,
        product,
        setProduct,
        increaseAmount,
        decreaseAmount,
        addToCart,
        deleteProduct,
        setSessionData,
        getSessionData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export default useGlobalContext;
