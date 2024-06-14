import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import ProductPage from "./pages/product-page";
import NotFoundPage from "./pages/not-found-page";
import MainLayout from "./layouts/main-layout";
import ProductCreatePage from "./pages/ProductCreatePage";
import { Toaster } from "react-hot-toast";

type AppProp = {};

const App: React.FC<AppProp> = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="product/create" element={<ProductCreatePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
