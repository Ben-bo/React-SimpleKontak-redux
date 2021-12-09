import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getDataKontak } from "../../actions/kontakAction";

const KontakComponent = () => {
  const { getKontak, kontakLoading, error } = useSelector(
    (state) => state.kontakIndexReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    //action getdata
    dispatch(getDataKontak());
  }, [dispatch]);
  return (
    <div>
      <Card className="my-3">
        <Card.Body>
          <Card.Title className="text-center">DATA KONTAK</Card.Title>
          <hr />
          <h1>hello</h1>
          {getKontak ? (
            getKontak.map((dataKontak) => {
              return (
                <p key={dataKontak.id}>
                  {dataKontak.nama} - {dataKontak.nohp}
                </p>
              );
            })
          ) : kontakLoading ? (
            <p>Loading ....</p>
          ) : (
            <p>{error ? error : "data kosong"}</p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default KontakComponent;
