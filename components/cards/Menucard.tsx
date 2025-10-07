'use client'
import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

interface EcommerceCardProps {
  productName?: string;
  price?: string;
  description?: string;
  imageUrl?: string;
}

export const EcommerceCard: FC<EcommerceCardProps> = ({
  productName = "Apple AirPods",
  price = "$95.00",
  description =
    "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  imageUrl = "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
}) => {
  return (
    <Card className="w-full max-w-sm mx-auto sm:w-80 md:w-96 shadow-lg transition-shadow duration-300">
      <CardHeader
        shadow={false}
        floated={false}
        className="h-64 sm:h-72 md:h-96"
      >
        <img
          src={imageUrl}
          alt={productName}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </CardHeader>

      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium text-sm sm:text-base md:text-lg">
            {productName}
          </Typography>
          <Typography color="blue-gray" className="font-medium text-sm sm:text-base md:text-lg">
            {price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 text-xs sm:text-sm md:text-base"
        >
          {description}
        </Typography>
      </CardBody>

      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg active:scale-100 transition-transform duration-200"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
