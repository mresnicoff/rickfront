const {
  ADD_FAVORITE,
  GET_FAVORITE,
  DELETE_FAVORITE,
  ORDER,
  FILTER,
  VALIDATE,
  SIGNUP,
} = require("./actions.js");
const initialState = {
  myFavorites: [],
  allCharacters: [],
  user: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      console.log(action.payload);
      return {
        ...state,
        allCharacters: action.payload,
        myFavorites: action.payload,
      };
    case VALIDATE:
      console.log(action.payload.favorites);
      return {
        ...state,
        user: action.payload.username,
        myFavorites: action.payload.favorites,
        allCharacters: action.payload.favorites,
      };

    case SIGNUP:
      return {
        ...state,
        user: action.payload.username,
        myFavorites: [],
        allCharacters: [],
      };

    case GET_FAVORITE:
      return {
        ...state,
        allCharacters: action.payload,
        myFavorites: action.payload,
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        allCharacters: action.payload,
        myFavorites: action.payload,
      };
    case FILTER:
      return {
        ...state,
        myFavorites: [...state.allCharacters].filter(
          (item) => item.gender === action.payload
        ),
      };

    case ORDER:
      console.log(state.myFavorites);
      console.log(action.payload);
      if (action.payload === "Ascendente") {
        return {
          ...state,
          myFavorites: [...state.allCharacters].sort((p1, p2) =>
            p1.id > p2.id ? 1 : p1.id < p2.id ? -1 : 0
          ),
        };
      } else {
        return {
          ...state,
          myFavorites: [...state.allCharacters].sort((p1, p2) =>
            p1.id < p2.id ? 1 : p1.id > p2.id ? -1 : 0
          ),
        };
      }

    default:
      return state;
  }
};

export default rootReducer;
