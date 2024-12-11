import React, { useState } from "react";
import styled from "styled-components";

const AddTaskForm = ({ addTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "To Do",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...formData, id: Date.now() });
    setFormData({ title: "", description: "", status: "To Do" });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Task Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <Input
        type="text"
        placeholder="Task Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        required
      />
      <Select
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </Select>
      <SubmitButton type="submit">Add Task</SubmitButton>
    </FormContainer>
  );
};

export default AddTaskForm;

// Styled Components
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004080;
  }
`;
