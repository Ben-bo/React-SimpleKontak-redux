import { GET_KONTAK, POST_KONTAK } from "../../actions/kontakAction";

const initailState = {
  getKontak: false,
  kontakLoading: false,
  error: false,

  addKontak: false,
  addKontakLoading: false,
  addError: false,
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
    default:
      return state;
  }
};
export default kontak;
