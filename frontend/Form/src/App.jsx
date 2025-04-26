import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import CreateForm from './pages/CreateFormPage';
import './App.css';
import ManageForm from './pages/ManageFormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form/:formId" element={<FormPage />} />
        <Route path="/create-form" element={<CreateForm />} /> {/* Add route for Create Form */}
        <Route path="/manage-form" element={<ManageForm />} /> {/* Add route for Create Form */}
      </Routes>
    </Router>
  );
}

export default App;