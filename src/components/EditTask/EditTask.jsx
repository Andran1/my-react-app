import React, { useState } from "react";
import { FormControl, Button, Modal } from "react-bootstrap";

export default function EditTask({data,showEditMod,editedData}) {


  const [edit, setEdit] = useState(    {
    id: data.id, 
    name: data.name,
    price: data.price,
    direction: data.direction,
  })


  const handleInputValue = (event) => {
    const { name, value } = event.target;
    setEdit({
      ...edit,
      [name]: value,
    });
  };

  const sendEditData=()=>{
    editedData(edit)
    showEditMod()
  }

  
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      return sendEditData();
    }
  };

  return (
    <div>
      <Modal
        show={true}
        onHide={showEditMod}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Add item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="Name"
            name="name"
            value={edit.name}
            onChange={handleInputValue}
            className="mb-2"
          />
          <FormControl
            placeholder="Price"
            rows={5}
            name="price"
            value={edit.price}
            onChange={handleInputValue}
          />

          <FormControl
            placeholder="Description"
            rows={5}
            name="direction"
            value={edit.direction}
            onChange={handleInputValue}
            onKeyPress={handleKeyDown}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button  variant="success" onClick={()=>sendEditData()} >
            Save
          </Button>
          <Button onClick={()=>showEditMod()} >Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
