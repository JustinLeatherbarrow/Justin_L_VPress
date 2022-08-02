import { reducerTypes } from "../constants"

const initialState = {
    apiData: [],
  }
  
  export default function appReducer(state = initialState, action) {

    console.log("REDUCER HIT: ", action);
    switch (action.type) {
        case reducerTypes.UPDATE_API_DATA:
            return { 
                ...state,
                apiData: action.payload.data,
            }
      default:
        return state
    }
  }