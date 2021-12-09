import axios from "axios";

export const GET_KONTAK = "GET_KONTAK";
export const getDataKontak = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //getAPI
    axios({
      method: "GET",
      url: "http://localhost:5000/kontak",
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: GET_KONTAK,
          payload: {
            loading: true,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
