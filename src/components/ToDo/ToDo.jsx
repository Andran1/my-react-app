import React, { useState } from "react";
import AddTask from "../AddTask/AddTask";
import Navigation from "../Navigation/Navigation";
import Task from "../Task/Task";
import EditTask from "../EditTask/EditTask";
import { Button, Row, Container, Col } from "react-bootstrap";
import styles from "../ToDo/todo.module.css";

export default function ToDo() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [state, setstate] = useState([
    {
      id: 1,
      name: "Ball",
      price: "2.5 $",
      direction: "LA",
    },
    {
      id: 2,
      name: "Bike",
      price: "350 $",
      direction: "LA",
    },
    { id: 3, name: "Car", price: "7850 $", direction: "LA" },
  ]);

  const [selectId, setSelectId] = useState(new Set());

  const [data, setData] = useState({});


  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const addNewItems = (newItem) => {
    console.log(newItem);
    setstate([...state, newItem]);
  };
  const delateTask = (selectedId) => {
    const deletedItem = state.filter((item) => item.id !== selectedId);
    setstate(deletedItem);
  };

  const addSelectedId = (id) => {
    const arr = new Set(selectId);

    if (arr.has(id)) {
      arr.delete(id);
    } else {
      arr.add(id);
    }

    setSelectId(new Set(arr));
  };

  const deleteSelectedTask = () => {
    const filterArr = state.filter((item) => {
      if (selectId.has(item.id)) {
        return false;
      }
      return true;
    });

    setstate(filterArr);
    setSelectId(new Set());
  };

  const editCardContext = (task) => {
    setData(task);
  };

  const showEditMod = () => {
    setShowEditModal(!showEditModal);
  };

  const editedData = (editItem) => {
    const tasks = state;

    const foundIndex = tasks.findIndex((task) => task.id === editItem.id);

    tasks[foundIndex] = editItem;

    setstate(tasks);
  };


  return (
    <div className={styles.toDoBox}>
      <Navigation />
      <Container>
        <Row>
          <Col>
            <div className={styles.btnBlock}>
              <Button onClick={toggleModal} variant="primary">
                Add Task
              </Button>
              <Button variant="danger" onClick={() => deleteSelectedTask()}>
                Delete
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.toDoListItemBox}>
              <Task
                data={state}
                delateTask={delateTask}
                addSelectedId={addSelectedId}
                editCardContext={editCardContext}
                showEditMod={showEditMod}
              />
            </div>
          </Col>
        </Row>


      </Container>

      {showModal && <AddTask close={toggleModal} addNewItems={addNewItems} />}
      {showEditModal && (
        <EditTask
          data={data}
          showEditMod={showEditMod}
          editedData={editedData}
        />
      )}
    </div> 
  );
}
