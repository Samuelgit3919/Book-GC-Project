// components/Loading.js
import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loading = () => (
  <div className="loading-container">
    <PuffLoader color="#4A90E2" size={60} />
  </div>
);

export default Loading;
