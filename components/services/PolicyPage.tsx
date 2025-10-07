import React from "react";

interface PolicyItem {
  id: number;
  title?: string;
  points?: string[];
}

interface PolicyPageProps {
  data: PolicyItem[];
  mainTitle: string;
  lastUpdated?: string;
}

const PolicyPage: React.FC<PolicyPageProps> = ({ data, mainTitle, lastUpdated }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Main Title */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">{mainTitle}</h1>

        {/* Last Updated */}
        {lastUpdated && (
          <p className="text-gray-700 mb-6">Last Updated: {lastUpdated}</p>
        )}

        {/* Policy Sections */}
        {data.map((item) => (
          <div key={item.id} className="mb-6">
            {/* Section Title */}
            {item.title && (
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h2>
            )}

            {/* List of Points */}
            {item.points?.length ? (
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {item.points.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyPage;
