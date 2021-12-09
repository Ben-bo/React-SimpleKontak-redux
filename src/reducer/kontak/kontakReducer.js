import { GET_KONTAK } from "../../actions/kontakAction";

const initailState = {
  getKontak: false,
  kontakLoading: false,
  error: false,
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
    default:
      return state;
  }
};
export default kontak;
