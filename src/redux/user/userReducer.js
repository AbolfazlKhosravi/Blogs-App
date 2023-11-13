import { PENDING_USER, REJECTED_USER, SUCCESS_USER } from "./userType";

const initialState = { user: null, loading: false, error: false };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case PENDING_USER:
      return { loading: true, user: null, error: false };
    case SUCCESS_USER:
      return { loading: false, user: action.payload, error: false };
    case REJECTED_USER:
      return { loading: false, user: null, error: action.error };
    default:
      return { ...state };
  }
}
