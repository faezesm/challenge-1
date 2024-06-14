import { useEffect, useState } from "react";
import { https } from "../services/api";
import toast from "react-hot-toast";

type ProductPageProps = {};

type ProductItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
};

const ProductPage: React.FC<ProductPageProps> = ({}) => {
  const [products, setProducts] = useState([] as ProductItem[]);
  useEffect(() => {
    https
      .get("/products")
      .then(function (res) {
        setProducts(res.data);
      })
      .catch(function (error) {
        return toast.error("به خطا خوردیم");
      });
  }, []);

  return (
    <div>
      <h1 className="text-xl">Products List</h1>
      {products.map((item) => (
        <div className="m-2 p-2 border-2 rounded-lg" key={item.id}>
          <h2>{item.title}</h2>
          <h3 className="text-green-700 font-bold">Price: {item.price}</h3>
          <h3 className="font-bold">Qty in Stock: {item.qty}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
