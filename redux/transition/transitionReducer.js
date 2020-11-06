import { PAGE_EXIT, PAGE_ENTER } from "./transitionTypes"

const initialState = {
      shrink: false
}

const transitionReducer = (state = initialState, action) => {
      switch(action.type) {
            case PAGE_ENTER: return {
                  shrink: false
            }
            case PAGE_EXIT: return {
                  shrink: true
            }
            default: return state
      }
}

export default transitionReducer