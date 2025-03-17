import { useState } from "react";

import ProductCart from "./components/ProductCart";
import Header from "./components/Header";
import {
  ProductContextProvider,
  useProductContext,
} from "./context/products.context";

function App() {
  return (
    <>
      <ProductContextProvider>
        <Header />
        <ProductCart />
      </ProductContextProvider>
    </>
  );
}

export default App;
