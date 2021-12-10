import axios from "axios";

export const GET_KONTAK = "GET_KONTAK";
export const POST_KONTAK = "POST_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const EDIT_KONTAK = "EDIT_KONTAK";
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
export const editData = (id, data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: EDIT_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //getAPI
    axios({
      method: "PUT",
      url: "http://localhost:5000/kontak/" + id,
      timeout: 120000,
      data: data,
    })
      .then((res) => {
        dispatch({
          type: EDIT_KONTAK,
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
          type: EDIT_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
export const deleteData = (id) => {
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
      method: "delete",
      url: "http://localhost:5000/kontak/" + id,
      timeout: 120000,
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
export const emptyDataDetail = () => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_KONTAK,
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
  };
};
export const detailKontak = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_KONTAK,
      payload: {
        data: data,
      },
    });
  };
};
