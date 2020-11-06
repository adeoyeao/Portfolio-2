import { combineReducers } from "redux"
import transitionReducer from "./transition/transitionReducer"

const rootReducer = combineReducers({
      transition: transitionReducer
})

export default rootReducer