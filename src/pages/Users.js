import React, { useState, useEffect } from "react";
import { Alert, Container, Table } from "react-bootstrap";

export default function Users() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    let apiUrl = "https://jsonplaceholder.typicode.com/users";

    fetch(apiUrl)
      .then((response) => {
        response.json().then((result) => {
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((e) => {
        let collection = localStorage.getItem("users");
        setData(JSON.parse(collection));
        setMode("offline");
      });
  }, []);

  return (
    <Container className="pt-5">
      {mode === "offline" ? (
        <Alert variant="danger">
          You are in offline mode, please check your internet connections
        </Alert>
      ) : null}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
