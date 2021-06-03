import React, { useState } from "react";
// import styles from "./card.module.css";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function Task({
  data,
  delateTask,
  addSelectedId,
  editCardContext,
  showEditMod,
}) {
  const [interval, setInterval] = useState(6);

  const selectedTask = (selectId) => {
    addSelectedId(selectId);
  };


  const editTask = (task) => {
    editCardContext(task);
    showEditMod();
  };
  const changeData = data.slice(0, interval);

  return (
    <>
      <Row>
        {changeData.map((item) => {
          return (
            <Col key={item.id}>
              <div >
                <Card style={{ width: "18rem" }}>
                  <Form.Check
                    type="checkbox"
                    onChange={() => selectedTask(item.id)}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Price:{item.price}</Card.Text>
                    <Card.Text>Direction:{item.direction}</Card.Text>
                  </Card.Body>
                  <Button variant="danger" onClick={() => delateTask(item.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Button>
                  <Button variant="warning" onClick={() => editTask(item)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>

      <Row>
        {data.length > 6 ? (
          <button onClick={() => setInterval(interval + 6)}>
            More Task...
          </button>
        ) : null}
      </Row>
    </>
  );
}
