import axios from "axios";

export const GET_KONTAK = "GET_KONTAK";
export const POST_KONTAK = "POST_KONTAK";
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
export const addData = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: POST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //getAPI
    axios({
      method: "POST",
      url: "http://localhost:5000/kontak",
      timeout: 120000,
      data: data,
    })
      .then((res) => {
        dispatch({
          type: POST_KONTAK,
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
          type: POST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
export const emptyData = () => {
  return (dispatch) => {
    dispatch({
      type: POST_KONTAK,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
  };
};
