import {
  GET_KONTAK,
  POST_KONTAK,
  DETAIL_KONTAK,
  EDIT_KONTAK,
} from "../../actions/kontakAction";

const initailState = {
  getKontak: false,
  kontakLoading: false,
  error: false,

  addKontak: false,
  addKontakLoading: false,
  addError: false,
  editKontak: false,
  editKontakLoading: false,
  editError: false,

  detailKontak: false,
};
const kontak = (state = initailState, action) => {
  switch (action.type) {
    case GET_KONTAK:
      return {
        ...state,
        getKontak: action.payload.data,
        kontakLoading: action.loading,
        error: action.errorMessage,
      };
    case POST_KONTAK:
      return {
        ...state,
        addKontak: action.payload.data,
        addKontakLoading: action.loading,
        addError: action.errorMessage,
      };
    case EDIT_KONTAK:
      return {
        ...state,
        editKontak: action.payload.data,
        editKontakLoading: action.loading,
        editError: action.errorMessage,
      };
    case DETAIL_KONTAK:
      return {
        ...state,
        detailKontak: action.payload.data,
      };
    default:
      return state;
  }
};
export default kontak;
