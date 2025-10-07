// pages/privacy-policy.tsx
import React from "react";
import PolicyPage from "@/components/services/PolicyPage";
import { PrivacypolicyData } from "@/data/policiesData";


const Privacypage: React.FC = () => {
  return (
    <PolicyPage
      data={PrivacypolicyData}
      mainTitle="Privacy Policy"
      lastUpdated="7th Oct, 2025"
    />
  );
};

export default Privacypage;
