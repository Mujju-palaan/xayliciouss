// pages/refund-policy.tsx
import React from "react";
import PolicyPage from "@/components/services/PolicyPage";
import { RefundpolicyData } from "@/data/policiesData";

const Refundpage: React.FC = () => {
  return (
    <PolicyPage
      data={RefundpolicyData}
      mainTitle="Refund Policy"
      lastUpdated="7th Oct, 2025"
    />
  );
};

export default Refundpage;
