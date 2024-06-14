import React from "react";
import { Link } from "react-router-dom";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="p-3">
      <div className="flex flex-col">
        <h1 className="text-2xl">Main Layout Worked!</h1>

        <ul className="flex flex-row gap-4 p-4 m-2 border-2 rounded-xl">
          <li className="bg-gray-200 p-2 rounded-xl hover:bg-gray-300">
            <Link to="/">Home Page</Link>
          </li>
          <li className="bg-gray-200 p-2 rounded-xl hover:bg-gray-300">
            <Link to="/product">Products List</Link>
          </li>
          <li className="bg-green-600 text-green-50 p-2 rounded-xl hover:bg-green-800">
            <Link to="/product/create">Create New Product</Link>
          </li>
        </ul>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default MainLayout;
