import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // 💥 Added useNavigate

const HomePage = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate(); // 💥 Define navigate properly

  const navigateToCreateForm = () => {
    navigate('/create-form');
  };

  const navigateToManageForm = () => {
    navigate('/manage-form');
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/forms')
      .then(response => {
        setForms(response.data);
      })
      .catch(error => {
        console.error('Error fetching forms:', error);
      });
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      
      {/* Create Form Button */}
      <div>
        <button onClick={navigateToCreateForm}>Create New Form</button>
      </div>

      {/* Manage Forms Button */}
      <div>
        <button onClick={navigateToManageForm}>Manage Forms</button>
      </div>

      {/* Optional: Display available forms */}
      <h2>Available Forms</h2>
      <ul>
        {forms.map(form => (
          <li key={form._id}>
            <Link to={`/form/${form._id}`}>{form.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
