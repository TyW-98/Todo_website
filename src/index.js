import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import CategoryFilter from './CategoryFilter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <CategoryFilter />
  </React.StrictMode>
);
