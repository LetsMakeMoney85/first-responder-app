import React from 'react';
import { useParams } from 'react-router-dom';

const IncidentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Incident {id}</h1>
        <p className="text-lg text-gray-700">Incident details and information</p>
      </div>
    </div>
  );
};

export default IncidentDetail;
