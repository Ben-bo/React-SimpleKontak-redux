import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { addData, emptyData, getDataKontak } from "../../actions/kontakAction";

const AddContak = () => {
  const { addKontak } = useSelector((state) => state.kontakIndexReducer);
  const dispatch = useDispatch();
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      nama: nama,
      nohp: nohp,
    };
    dispatch(addData(data));
  };
  useEffect(() => {
    if (addKontak) {
      swal("Good job!", "You clicked the button!", "success");
      dispatch(getDataKontak());
      dispatch(emptyData());
      setNama("");
      setNohp("");
    }
  }, [addKontak, dispatch]);

  return (
    <div>
      <Card className="my-3">
        <Card.Body>
          <Card.Title className="text-center">ADD DATA</Card.Title>
          <hr />
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter nama..."
                name="nama"
                value={nama}
                onChange={(event) => setNama(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>noHP</Form.Label>
              <Form.Control
                type="number"
                placeholder="nohp..."
                name="nohp"
                value={nohp}
                onChange={(event) => setNohp(event.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddContak;
