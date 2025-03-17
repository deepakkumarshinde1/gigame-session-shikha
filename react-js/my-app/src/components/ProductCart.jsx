import { useProductContext } from "../context/products.context";

function ProductCart() {
  let { productCart } = useProductContext();
  return (
    <div>
      <ul>
        {productCart.map((product) => {
          return (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                Price: {product.price} {product.currency}
              </p>
              <p>Quantity: {product.quantity}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductCart;
