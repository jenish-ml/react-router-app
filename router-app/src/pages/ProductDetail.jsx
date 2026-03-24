import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => navigate(-1)}>← Go Back</button>
    </div>
  );
};

export default ProductDetail;
