import { useProductContext } from "../context/products.context";

function Header() {
  let { productCart } = useProductContext();
  return <div>Header {productCart.length}</div>;
}

export default Header;
