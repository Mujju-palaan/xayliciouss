'use client'
import React from "react";
import MenuCard from "../card/MenuCard";

const items = [
  { id: 1, title: "mujju", price: 1.99, quantity: 0 },
  { id: 2, title: "ffff", price: 3.99, quantity: 0 },
  { id: 3, title: "ssss", price: 4.99, quantity: 0 },
  { id: 4, title: "aaaa", price: 5.99, quantity: 3 },
];

const MenuList = () => {

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {items.map((item) => (
        <MenuCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default MenuList;
