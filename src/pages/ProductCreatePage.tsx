import axios from "axios";
import { ChangeEvent, useState } from "react";
import { https } from "../services/api";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type TProducts = {
  title: string;
  price: string;
  qty: string;
};

const ProductCreatePage = () => {
  const [product, setProduct] = useState<TProducts>({
    title: "",
    price: "",
    qty: "",
  });

  const navigate = useNavigate();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setProduct((product) => ({ ...product, [name]: value }));
  };

  const showNotification = (status: number) => {
    if (status === 201) {
      setProduct({
        price: "",
        qty: "",
        title: "",
      });
      setTimeout(() => {
        navigate("/product");
      }, 1500);
      return toast.success("محصول با موفقیت ثبت شد");
    }
  };

  const addHandler = () => {
    if (!product.price || !product.qty || !product.title)
      return toast.error("لطفا مقادیر را پر کنید");
    https.post("/products", product).then((data) => showNotification(data.status));
  };
  return (
    <div>
      <div className="flex flex-col ... p-2 ">
        <input
          className="mb-2 p-3 w-1/2 m-auto border-lime-600 shadow-lg border-2 rounded-md"
          type="text"
          name="title"
          value={product.title}
          placeholder="Title"
          onChange={changeHandler}
        />
        <input
          className="mb-2 p-3 w-1/2 m-auto border-lime-600 shadow-lg border-2 rounded-md"
          type="text"
          name="price"
          value={product.price}
          placeholder="Price"
          onChange={changeHandler}
        />
        <input
          className="mb-2 p-3 w-1/2 m-auto border-lime-600 shadow-lg border-2 rounded-md"
          type="text"
          name="qty"
          value={product.qty}
          placeholder="Quntity"
          onChange={changeHandler}
        />
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={addHandler}
          className="p-3 bg-green-700 w-1/4 shadow-lg border-2 rounded-lg"
        >
          Created
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductCreatePage;
