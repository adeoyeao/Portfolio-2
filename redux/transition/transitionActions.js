import { PAGE_EXIT, PAGE_ENTER } from "./transitionTypes"

const pageExit = () => ({ type: PAGE_EXIT })
const pageEnter = () => ({ type: PAGE_ENTER })

export { pageExit, pageEnter }