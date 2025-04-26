import React, { useEffect, useState } from 'react';
import { getForms, deleteForm } from '../services/api'; // Import API service

const ManageForm = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchForms = async () => {
        try {
          const response = await getForms();
          console.log("Fetched Forms: ", response.data); // Log response.data
          setForms(response.data); // Use response.data to get the array of forms
        } catch (err) {
          setError('Failed to load forms');
        } finally {
          setLoading(false);
        }
      };
      

    fetchForms();
  }, []);

  const handleDelete = async (id) => {
    console.log("Deleting form ID:", id); // Debug log

    try {
      const response = await deleteForm(id);
      if (response.message === 'Form deleted successfully') {
       
        setForms(forms.filter((form) => form._id !== id)); 
      }
      alert("deleted sucessfully");
    } catch (err) {
      setError('Failed to delete form');
    }
  };

  if (loading) {
    return <div>Loading forms...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="manage-form-container">
      <h1>Manage Forms</h1>
      <div className="forms-list">
        {forms.length > 0 ? (
          forms.map((form) => (
            <div key={form._id} className="form-item">
              <h3>{form.title}</h3>
              <p>{form.description}</p>
              <button onClick={() => handleDelete(form._id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No forms available.</p>
        )}
      </div>
    </div>
  );
};

export default ManageForm;
