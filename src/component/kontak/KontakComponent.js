import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import {
  deleteData,
  detailKontak,
  getDataKontak,
} from "../../actions/kontakAction";

const KontakComponent = () => {
  const { getKontak, kontakLoading, error } = useSelector(
    (state) => state.kontakIndexReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    //action getdata
    dispatch(getDataKontak());
  }, [dispatch]);
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteData(id));
        swal("Poof! Your DATA has been deleted!", {
          icon: "success",
        });
        dispatch(getDataKontak());
      } else {
        swal("Your DATA is safe!");
      }
    });
  };
  const handleEdit = (data) => {
    dispatch(detailKontak(data));
  };
  return (
    <div>
      <Card className="my-3">
        <Card.Body>
          <Card.Title className="text-center">DATA KONTAK</Card.Title>
          <hr />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>NoHP</th>
                <th>AKSI</th>
              </tr>
            </thead>
            <tbody>
              {getKontak ? (
                getKontak.map((dataKontak) => {
                  return (
                    <tr key={dataKontak.id}>
                      <td>{dataKontak.id}</td>
                      <td>{dataKontak.nama}</td>
                      <td>{dataKontak.nohp}</td>
                      <td>
                        {" "}
                        <Button onClick={() => handleDelete(dataKontak.id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>{" "}
                        <Button onClick={() => handleEdit(dataKontak)}>
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                      </td>
                    </tr>
                  );
                })
              ) : kontakLoading ? (
                <p>Loading ....</p>
              ) : (
                <p>{error ? error : "data kosong"}</p>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default KontakComponent;
