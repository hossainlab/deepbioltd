
import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center min-h-[calc(100vh-160px)] bg-gray-50">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default LoadingSpinner;
