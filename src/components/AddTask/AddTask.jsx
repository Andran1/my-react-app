import React,{useState } from "react";
// import styles from "./modal.module.css";
import {FormControl,Button,Modal} from 'react-bootstrap'
import idGenerator from '../../helpers/idGenerator'

export default function AddTask({ close, addNewItems }) {


  
  const [inputValue, setInputValue] = useState({
    id:idGenerator(),
    name: "",
    price: "",
    direction: "",
  });

  const handleInputValue = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      return addItem();
    }
  };

  const addItem = () => {
    const { name } = inputValue;
    if (!name) {
      return;
    }
    addNewItems(inputValue);

    close();
  };

  return (

    <Modal
      show={true}
      onHide={close}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title>Add item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl
          placeholder="Name"
          name="name"
          value={inputValue.name}
          onChange={handleInputValue}
          className="mb-2"
        />
        <FormControl
          placeholder="Price"
          rows={5}
          name="price"
          value={inputValue.price}
          onChange={handleInputValue}
        />

        <FormControl
          placeholder="Description"
          rows={5}
          name="direction"
          value={inputValue.direction}
          onChange={handleInputValue}
          onKeyPress={handleKeyDown}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={addItem} variant="success">
          Add
        </Button>
        <Button onClick={close}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
