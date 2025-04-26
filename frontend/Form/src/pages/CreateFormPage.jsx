import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CreateFormPage = () => {
  const [fields, setFields] = useState([]);
  const [formTitle, setFormTitle] = useState('');

  // Handles the drag end event to reorder the fields
  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return; // Dropped outside the list

    const reorderedFields = Array.from(fields);
    const [removed] = reorderedFields.splice(source.index, 1);
    reorderedFields.splice(destination.index, 0, removed);

    setFields(reorderedFields);
  };
  // Inside CreateFormPage component
  const saveForm = async () => {
    const formData = {
      title: formTitle,
      description: "", // send empty string if not used
      fields,
      createdBy: "admin", // or current user ID / name
    };
  
    try {
      const response = await axios.post('http://localhost:5000/api/forms', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('Form saved:', response.data);
      alert('Form created successfully!');
    } catch (error) {
      console.error('Error saving form:', error);
      alert('Error saving form. Check console for details.');
    }
  };
  

  // Adds a new field to the form
  const addField = (type) => {
    const newField = { id: Date.now(), type, label: '', options: [] };
    setFields([...fields, newField]);
  };

  // Updates the field label when the admin types
  const handleLabelChange = (id, value) => {
    const updatedFields = fields.map(field => 
      field.id === id ? { ...field, label: value } : field
    );
    setFields(updatedFields);
  };
  const handleOptionChange = (id, index, value) => {
    const updatedFields = fields.map(field => {
      if (field.id === id) {
        const newOptions = [...field.options];
        newOptions[index] = value;
        return { ...field, options: newOptions };
      }
      return field;
    });
    setFields(updatedFields);
  };
  
  const addOption = (id) => {
    const updatedFields = fields.map(field => {
      if (field.id === id) {
        return { ...field, options: [...field.options, ''] };
      }
      return field;
    });
    setFields(updatedFields);
  };
  

  // Saves the form (to be connected to backend)


  return (
    <div>
      <h1>Create New Form</h1>

      {/* Form Title Input */}
      <input
        type="text"
        placeholder="Enter form title"
        value={formTitle}
        onChange={(e) => setFormTitle(e.target.value)}
      />

      <div>
        {/* Buttons to add form fields */}
        <button onClick={() => addField('text')}>Add Text Field</button>
        <button onClick={() => addField('dropdown')}>Add Dropdown</button>
        <button onClick={() => addField('checkbox')}>Add Checkbox</button>
      </div>

      {/* Drag and Drop Form Builder */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="form-fields" isDropDisabled={false}  ignoreContainerClipping={true} isCombineEnabled={true}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ marginTop: '20px' }}
            >
              {fields.map((field, index) => (
                <Draggable 
                key={field.id} 
                draggableId={String(field.id)} 
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      marginBottom: '10px',
                      padding: '10px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      backgroundColor: '#f9f9f9',
                    }}
                  >
                    {/* Field Label Input */}
                    <input
                      type="text"
                      placeholder="Field Label"
                      value={field.label}
                      onChange={(e) => handleLabelChange(field.id, e.target.value)}
                      style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                    />
              
                    {/* Options for dropdown or checkbox */}
                    {(field.type === 'dropdown' || field.type === 'checkbox') && (
                      <div>
                        <strong>Options:</strong>
                        {field.options.map((option, i) => (
                          <input
                            key={i}
                            type="text"
                            placeholder={`Option ${i + 1}`}
                            value={option}
                            onChange={(e) => handleOptionChange(field.id, i, e.target.value)}
                            style={{ display: 'block', marginTop: '5px', width: '100%' }}
                          />
                        ))}
                        <button 
                          type="button" 
                          onClick={() => addOption(field.id)}
                          style={{ marginTop: '5px' }}
                        >
                          Add Option
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </Draggable>
              
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Button to save the form */}
      <button onClick={saveForm}>Save Form</button>
      
      {/* Link to navigate back */}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default CreateFormPage;
