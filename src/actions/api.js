import { reducerTypes } from "../constants";

export default function updateAPIData(data) {
    return {
        type: reducerTypes.UPDATE_API_DATA,
        payload: data
     }
}


