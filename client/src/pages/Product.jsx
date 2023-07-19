import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    {
      id: "1",
      name: "Whiskas",
    },
    {
      id: "2",
      name: "Pedigree",
    },
    {
      id: "3",
      name: "Bites",
    },
  ];
  return (
    <div>
      <h2>I am product page</h2>
      <h4>Our different products re:</h4>

      <ul>
        {products.map((pro) => (
          <li key={pro.id}>
            <Link to={`/products/${pro.id}`}>{pro.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Product;
