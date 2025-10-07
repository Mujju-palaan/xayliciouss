// pages/shipping-policy.tsx
import React from "react";
import PolicyPage from "@/components/services/PolicyPage";
import { ShippingpolicyData } from "@/data/policiesData";

const Shippingpage: React.FC = () => {
  return (
    <PolicyPage
      data={ShippingpolicyData}
      mainTitle="Shipping Policy"
      lastUpdated="7th Oct, 2025"
    />
  );
};

export default Shippingpage;
