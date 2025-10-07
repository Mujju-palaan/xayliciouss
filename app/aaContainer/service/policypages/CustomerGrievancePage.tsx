import React from 'react'
import PolicyPage from "@/components/services/PolicyPage";
import { CustomerGrievanceData } from "@/data/policiesData";

const CustomerGrievancePage: React.FC = () => {
  return (
    <PolicyPage
      data={CustomerGrievanceData}
      mainTitle="Customer Grievance Policy"
      lastUpdated="7th Oct, 2025"
    />
  );
};

export default CustomerGrievancePage