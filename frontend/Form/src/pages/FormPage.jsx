import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { submitResponse } from '../services/api';

const FormPage = () => {
  const { formId } = useParams();
  const [form, setForm] = useState(null);
  const [response, setResponse] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/forms/${formId}`)
      .then(response => setForm(response.data))
      .catch(error => console.error('Error fetching form:', error));
  }, [formId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setResponse(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitResponse({ formId, ...response });
      alert('Form submitted successfully!');
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  if (!form) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="form-container">
      <h1 className="form-title">{form.title}</h1>
      <form className="form-content" onSubmit={handleSubmit}>
        {form.fields.map((field, index) => (
          <div key={index} className="form-group">
            <label className="form-label">{field.label}</label>

            {field.type === 'text' && (
              <input
                type="text"
                name={field.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder={`Enter ${field.label}`}
              />
            )}

            {field.type === 'dropdown' && (
              <select
                name={field.name}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select an option</option>
                {field.options.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}

            {field.type === 'checkbox' && field.options && (
              <div className="checkbox-group">
                {field.options.map((option, i) => (
                  <label key={i} className="checkbox-label">
                    <input
                      type="checkbox"
                      name={field.name}
                      value={option}
                      onChange={handleInputChange}
                      className="checkbox-input"
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
