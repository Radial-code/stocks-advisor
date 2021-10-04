import { GET_CONTACT_LIST } from "../action/contact";

const initialState = {
  contactList: [],
};

export default function ListReducer(state = initialState, action) {
  switch (action.type) {
    // Get contact list
    case GET_CONTACT_LIST: {
      return {
        ...state,
        contactList: action.data,
      };
    }

    default:
      return state;
  }
}
