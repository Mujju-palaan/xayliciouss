// pages/terms-conditions.tsx
import React from "react";
import PolicyPage from "@/components/services/PolicyPage";
import { TermsconditionData } from "@/data/policiesData";

const Termspage: React.FC = () => {
  return (
    <PolicyPage
      data={TermsconditionData}
      mainTitle="Terms & Conditions"
      lastUpdated="7th Oct, 2025"
    />
  );
};

export default Termspage;
