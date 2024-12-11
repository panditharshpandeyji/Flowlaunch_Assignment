import React, { useEffect, useState } from "react";
import TaskTable from "./components/TaskTable";
import styled from "styled-components";
import AddTaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.slice(0, 20).map((item) => ({
          id: item.id,
          title: item.title,
          description: "Sample Description",
          status: item.completed ? "Done" : "To Do",
        }));
        setTasks(formattedData);
      });
  }, []);

  const filteredTasks =
    filterStatus === "All"
      ? tasks
      : tasks.filter((task) => task.status === filterStatus);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <Container>
        <NewTaskButton onClick={() => setShowModal(true)}>
          New Task
        </NewTaskButton>
        <TaskTable tasks={filteredTasks} setTasks={setTasks} />
        {showModal && (
          <Modal>
            <ModalContent>
              <CloseButton onClick={() => setShowModal(false)}>
                &times;
              </CloseButton>
              <AddTaskForm addTask={addTask} />
            </ModalContent>
          </Modal>
        )}
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  margin: 50px auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  font-size: 32px;
  font-weight: 600;
`;

const NewTaskButton = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #218838;
  }

  &:active {
    background-color: #1e7e34;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #000;
  }
`;
