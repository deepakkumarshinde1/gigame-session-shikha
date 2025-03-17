import { createContext, useContext, useState } from "react";

// Create a context
let ProductContext = createContext();

// create a custom hook => handling the context
export function useProductContext() {
  return useContext(ProductContext);
}

// create a provider component

export function ProductContextProvider(props) {
  let [productCart, setProductCart] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 59.99,
      quantity: 2,
      currency: "USD",
      image: "https://example.com/images/wireless-headphones.jpg",
      description: "High-quality wireless headphones with noise cancellation.",
    },
    {
      id: 2,
      name: "Gaming Mouse",
      category: "Computers & Accessories",
      price: 29.99,
      quantity: 1,
      currency: "USD",
      image: "https://example.com/images/gaming-mouse.jpg",
      description:
        "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
    },
    {
      id: 3,
      name: "Smartwatch",
      category: "Wearable Technology",
      price: 99.99,
      quantity: 1,
      currency: "USD",
      image: "https://example.com/images/smartwatch.jpg",
      description: "Waterproof smartwatch with heart rate monitoring and GPS.",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      category: "Audio",
      price: 45.5,
      quantity: 1,
      currency: "USD",
      image: "https://example.com/images/bluetooth-speaker.jpg",
      description:
        "Portable Bluetooth speaker with deep bass and 12-hour battery life.",
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      category: "Computers & Accessories",
      price: 79.99,
      quantity: 1,
      currency: "USD",
      image: "https://example.com/images/mechanical-keyboard.jpg",
      description:
        "RGB backlit mechanical keyboard with tactile switches for gaming.",
    },
  ]);
  let shared = {
    productCart,
  };
  return (
    <ProductContext.Provider value={shared}>
      {props.children}
    </ProductContext.Provider>
  );
}
