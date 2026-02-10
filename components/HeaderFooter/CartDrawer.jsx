import React from "react";
import { Button, Drawer, Box } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import MenuInCartCard from "../card/MenuInCartCard";

const DRAWER_WIDTH = 300;

const CartDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const items = useSelector((state) => state.items.items || []);

  const totalItems = items.reduce(
    (total, item) => total + (item.quantity || 0),
    0,
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* Cart Icon */}
      <div className="relative text-2xl cursor-pointer">
        <div
          aria-label="Open cart"
          onClick={handleDrawerOpen}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/40 sm:h-10 sm:w-10"
        >
          <AiOutlineShoppingCart className="text-lg text-white" />
        </div>

        {/* Cart Count Badge */}
        {totalItems > 0 && (
          <span
            className="absolute -top-0 -right-0 flex items-center justify-center h-4 w-4
              rounded-full bg-red-600 text-[10px] font-bold text-white">
            {totalItems}
          </span>
        )}
      </div>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
          },
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-3 border-b shadow-sm">
          <h1 className="text-lg font-semibold">Shopping Cart</h1>
          <Button onClick={handleDrawerClose}>❌</Button>
        </div>

        {/* Drawer Content */}
        <div className="p-4">
          {items.length === 0 ? (
            <p
              className="flex p-8 text-center text-gray-500 text-2xl font-semibold font-sans
            justify-center items-center"
            >
              Your Xayliciouss cart is empty.
            </p>
          ) : (
            <div className="flex flex-col justify-center items-center gap-2">
              {items.map((item) => (
                <MenuInCartCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </div>
          )}
        </div>
      </Drawer>
    </Box>
  );
};

export default CartDrawer;
