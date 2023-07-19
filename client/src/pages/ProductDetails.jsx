
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();
  return (
    <div>
      <h2>Product details</h2>
      <p>I am product number {params.id}</p>
    </div>
  );
};

export default ProductDetails;
