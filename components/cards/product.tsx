import React from "react";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
};

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <li className="border p-4 rounded shadow-sm">
      <h2 className="font-semibold">{product.title}</h2>
      <p>Price: ₹{product.price}</p>
      <p className={product.inStock ? "text-green-600" : "text-red-600"}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </li>
  );
};

export default Product;
